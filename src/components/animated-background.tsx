"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger);

const STATES = [
  {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
    mobile: {
      scale: { x: 0.15, y: 0.15, z: 0.15 },
      position: { x: 0, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 12,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.2, y: 0.2, z: 0.2 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
    },
  },
  {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
  {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    mobile: {
      scale: { x: 0.18, y: 0.18, z: 0.18 },
      position: { x: 0, y: 150, z: 0 },
      rotation: {
        x: Math.PI,
        y: Math.PI / 3,
        z: Math.PI,
      },
    },
  },
];

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [bongoAnimation, setBongoAnimation] = useState<{
    start: () => void;
    stop: () => void;
  }>();
  const [keycapAnimtations, setKeycapAnimtations] = useState<{
    start: () => void;
    stop: () => void;
  }>();

  const keyboardStates = (idx: number) => {
    return STATES[idx][isMobile ? "mobile" : "desktop"];
  };

  const handleMouseHover = (e: SplineEvent) => {
    if (!splineApp || selectedSkill?.name === e.target.name) return;

    if (e.target.name === "body" || e.target.name === "platform") {
      setSelectedSkill(null);
      if (splineApp.getVariable("heading") && splineApp.getVariable("desc")) {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    } else {
      if (!selectedSkill || selectedSkill.name !== e.target.name) {
        const skill = SKILLS[e.target.name as SkillNames];
        setSelectedSkill(skill);
      }
    }
  };

  // handle keyboard press interaction
  useEffect(() => {
    if (!selectedSkill || !splineApp) return;
    splineApp.setVariable("heading", selectedSkill.label);
    splineApp.setVariable("desc", selectedSkill.shortDescription);
  }, [selectedSkill]);

  // handle keyboard heading and desc visibility
  useEffect(() => {
    if (!splineApp) return;
    const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
    const textDesktopLight = splineApp.findObjectByName("text-desktop");
    const textMobileDark = splineApp.findObjectByName("text-mobile-dark");
    const textMobileLight = splineApp.findObjectByName("text-mobile");
    if (
      !textDesktopDark ||
      !textDesktopLight ||
      !textMobileDark ||
      !textMobileLight
    )
      return;
    if (theme === "dark" && !isMobile) {
      textDesktopDark.visible = false;
      textDesktopLight.visible = true;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
    } else if (theme === "dark" && isMobile) {
      textDesktopDark.visible = false;
      textDesktopLight.visible = false;
      textMobileDark.visible = false;
      textMobileLight.visible = true;
    } else if (theme === "light" && !isMobile) {
      textDesktopDark.visible = true;
      textDesktopLight.visible = false;
      textMobileDark.visible = false;
      textMobileLight.visible = false;
    } else {
      textDesktopDark.visible = false;
      textDesktopLight.visible = false;
      textMobileDark.visible = true;
      textMobileLight.visible = false;
    }
  }, [theme, splineApp, isMobile]);

  const rotateKeyboard = useRef<gsap.core.Tween>();
  const teardownKeyboard = useRef<gsap.core.Tween>();
  // initialize gsap animations
  useEffect(() => {
    handleSplineInteractions();
    handleGsapAnimations();
    setBongoAnimation(getBongoAnimation());
    setKeycapAnimtations(getKeycapsAnimation());
  }, [splineApp]);

  useEffect(() => {
    (async () => {
      if (!splineApp) return;
      const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
      if (!kbd) return;
      rotateKeyboard.current = gsap.to(kbd.rotation, {
        y: Math.PI * 2 + kbd.rotation.y,
        duration: 10,
        repeat: -1,
        yoyo: true,
        yoyoEase: true,
        ease: "back.inOut",
        delay: 2.5,
      });
      teardownKeyboard.current = gsap.fromTo(
        kbd.rotation,
        {
          y: 0,
          // x: -Math.PI,
          x: -Math.PI,
          z: 0,
        },
        {
          y: -Math.PI / 2,
          duration: 5,
          repeat: -1,
          yoyo: true,
          yoyoEase: true,
          // ease: "none",
          delay: 2.5,
          immediateRender: false,
          paused: true,
        }
      );
      if (activeSection === "hero") {
        rotateKeyboard.current.restart();
        teardownKeyboard.current.pause();
      } else if (activeSection === "contact") {
        rotateKeyboard.current.pause();
        teardownKeyboard.current.restart();
      } else if (activeSection === "contact") {
        rotateKeyboard.current.pause();
        teardownKeyboard.current.restart();
      } else if (activeSection === "contact") {
        rotateKeyboard.current.pause();
      } else {
        rotateKeyboard.current.pause();
        teardownKeyboard.current.pause();
      }
      if (activeSection === "skills") {
      } else {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
      if (activeSection === "projects") {
        await sleep(300);
        bongoAnimation?.start();
      } else {
        await sleep(200);
        bongoAnimation?.stop();
      }
      if (activeSection === "contact") {
        await sleep(300);
        keycapAnimtations?.start();
      } else {
        await sleep(300);
        keycapAnimtations?.stop();
      }
    })();
    return () => {
      if (rotateKeyboard.current) rotateKeyboard.current.kill();
      if (teardownKeyboard.current) teardownKeyboard.current.kill();
    };
  }, [activeSection, splineApp]);

  //reveal keycaps
  useEffect(() => {
    if (!splineApp || isLoading) return;
    revealKeyCaps();
  }, [splineApp, isLoading]);
  const revealKeyCaps = async () => {
    if (!splineApp) return;
    const allObjects = splineApp.getAllObjects();
    const keycaps = allObjects.filter((obj) => obj.name === "keycap");
    await sleep(500);
    if (isMobile) {
      const mobileKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-mobile"
      );
      mobileKeyCaps.forEach((keycap, idx) => {
        keycap.visible = true;
      });
    } else {
      const desktopKeyCaps = allObjects.filter(
        (obj) => obj.name === "keycap-desktop"
      );
      desktopKeyCaps.forEach(async (keycap, idx) => {
        await sleep(idx * 100);
        keycap.visible = true;
      });
    }
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await sleep(idx * 100);
      keycap.visible = true;
      gsap.fromTo(
        keycap.position,
        { y: 200 },
        { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
      );
    });
  };
  const handleSplineInteractions = () => {
    if (!splineApp) return;
    // show either desktop text or mobile text
    // if (isMobile) {
    //   const text = splineApp.findObjectByName("text-mobile");
    //   if (text) text.visible = true;
    // } else {
    //   const text = splineApp.findObjectByName("text-desktop");
    //   if (text) text.visible = true;
    // }

    splineApp.addEventListener("keyUp", (e) => {
      if (!splineApp) return;
      splineApp.setVariable("heading", "");
      splineApp.setVariable("desc", "");
    });
    splineApp.addEventListener("keyDown", (e) => {
      if (!splineApp) return;
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) setSelectedSkill(skill);
      splineApp.setVariable("heading", skill.label);
      splineApp.setVariable("desc", skill.shortDescription);
    });
    splineApp.addEventListener("mouseHover", handleMouseHover);
  };
  const handleGsapAnimations = () => {
    if (!splineApp) return;
    const kbd: SPEObject | undefined = splineApp.findObjectByName("keyboard");
    if (!kbd || !splineContainer.current) return;
    gsap.set(kbd.scale, {
      ...keyboardStates(0).scale,
    });
    gsap.set(kbd.position, {
      ...keyboardStates(0).position,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("skills");
          gsap.to(kbd.scale, { ...keyboardStates(1).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(1).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(1).rotation, duration: 1 });
        },
        onLeaveBack: () => {
          setActiveSection("hero");
          gsap.to(kbd.scale, { ...keyboardStates(0).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(0).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(0).rotation, duration: 1 });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("projects");
          gsap.to(kbd.scale, { ...keyboardStates(2).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(2).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(2).rotation, duration: 1 });
        },
        onLeaveBack: () => {
          setActiveSection("skills");
          gsap.to(kbd.scale, { ...keyboardStates(1).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(1).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(1).rotation, duration: 1 });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
        onEnter: () => {
          setActiveSection("contact");
          gsap.to(kbd.scale, { ...keyboardStates(3).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(3).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(3).rotation, duration: 1 });
        },
        onLeaveBack: () => {
          setActiveSection("projects");
          gsap.to(kbd.scale, { ...keyboardStates(2).scale, duration: 1 });
          gsap.to(kbd.position, { ...keyboardStates(2).position, duration: 1 });
          gsap.to(kbd.rotation, { ...keyboardStates(2).rotation, duration: 1 });
          // gsap.to(kbd.rotation, { x: 0, duration: 1 });
        },
      },
    });
  };
  const getBongoAnimation = () => {
    const framesParent = splineApp?.findObjectByName("bongo-cat");
    const frame1 = splineApp?.findObjectByName("frame-1");
    const frame2 = splineApp?.findObjectByName("frame-2");
    if (!frame1 || !frame2 || !framesParent)
      return { start: () => {}, stop: () => {} };

    let interval: NodeJS.Timeout;
    const start = () => {
      let i = 0;
      framesParent.visible = true;
      interval = setInterval(() => {
        if (i % 2) {
          frame1.visible = false;
          frame2.visible = true;
        } else {
          frame1.visible = true;
          frame2.visible = false;
        }
        i++;
      }, 100);
    };
    const stop = () => {
      clearInterval(interval);
      framesParent.visible = false;
      frame1.visible = false;
      frame2.visible = false;
    };
    return { start, stop };
  };
  const getKeycapsAnimation = () => {
    if (!splineApp) return { start: () => {}, stop: () => {} };

    let tweens: gsap.core.Tween[] = [];
    const start = () => {
      removePrevTweens();
      Object.values(SKILLS)
        .sort(() => Math.random() - 0.5)
        .forEach((skill, idx) => {
          const keycap = splineApp.findObjectByName(skill.name);
          if (!keycap) return;
          const t = gsap.to(keycap?.position, {
            y: Math.random() * 200 + 200,
            duration: Math.random() * 2 + 2,
            delay: idx * 0.6,
            repeat: -1,
            yoyo: true,
            yoyoEase: "none",
            ease: "elastic.out(1,0.3)",
          });
          tweens.push(t);
        });
    };
    const stop = () => {
      removePrevTweens();
      Object.values(SKILLS).forEach((skill) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (!keycap) return;
        const t = gsap.to(keycap?.position, {
          y: 50,
          duration: 4,
          repeat: 1,
          ease: "elastic.out(1,0.8)",
        });
        tweens.push(t);
      });
      setTimeout(removePrevTweens, 1000);
    };
    const removePrevTweens = () => {
      tweens.forEach((t) => t.kill());
    };
    return { start, stop };
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/skills-keyboard.spline"
        />
      </Suspense>
    </>
  );
};

export default AnimatedBackground;
