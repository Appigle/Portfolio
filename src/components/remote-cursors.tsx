"use client";
import { SocketContext } from "@/contexts/socketio";
import { useMouse } from "@/hooks/use-mouse";
import { useThrottle } from "@/hooks/use-throttle";
import { MousePointer2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

type Cursor = {
  id: string;
  x: number;
  y: number;
  name?: string;
  color?: string;
};
type CursorsMap = Map<string, Cursor>;

const colors = [
  "#60a5fa",
  "#f87171",
  "#4ade80",
  "#facc15",
  "#c084fc",
  "#fb923c",
  "#f43f5e",
  "#818cf8",
  "#22d3ee",
  "#a3e635",
];
// TODO: add clicking animation
const RemoteCursors = () => {
  const { socket } = useContext(SocketContext);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { x, y } = useMouse({ allowPage: true });
  const [remoteCursors, setRemoteCursors] = useState<CursorsMap>(new Map());
  useEffect(() => {
    if (typeof window === "undefined" || !socket || isMobile) return;
    socket.on("cursor-changed", (data) => {
      setRemoteCursors((prev) => {
        const newMap = new Map(prev);
        // add color if new cursor
        if (!prev.has(data.id)) {
          newMap.set(data.id, {
            ...data,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        } else {
          newMap.set(data.id, { ...prev.get(data.id), ...data });
        }
        return newMap;
      });
    });
    return () => {
      socket.off("cursor-changed");
    };
  }, [socket, isMobile]);
  const handleMouseMove = useThrottle((x, y) => {
    socket?.emit("cursor-change", { x, y, id: socket.id, name: "foo" });
  }, 200);
  useEffect(() => {
    if (isMobile) return;
    handleMouseMove(x, y);
  }, [x, y, isMobile]);
  const cursors = Array.from(remoteCursors.values());
  return (
    <div className="h-0">
      {cursors.map((cursor) => (
        <Cursor
          key={cursor.id}
          x={cursor.x}
          y={cursor.y}
          color={cursor.color}
        />
      ))}
    </div>
  );
};

const Cursor = ({ color, x, y }: { x: number; y: number; color?: string }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x,
      y,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    });

    const fadeOutTimeout = setTimeout(() => {
      controls.start({
        opacity: 2,
        transition: { duration: 0.5 },
      });
    }, 1000); // 1 second

    return () => {
      clearTimeout(fadeOutTimeout);
      controls.stop();
    };
  }, [x, y, controls]);
  return (
    <motion.div
      animate={{
        x: x,
        y: y,
      }}
      className="w-6 h-6"
      transition={{
        duration: 0.2, // Adjust duration for smoothness
        ease: "easeOut", // Choose an easing function
      }}
    >
      <MousePointer2
        className="w-6 h-6 z-[9999999]"
        style={{ color: color }}
        strokeWidth={7.2}
      />
    </motion.div>
  );
};

export default RemoteCursors;
