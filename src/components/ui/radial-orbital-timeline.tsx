"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval>;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 190;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusLabel = (status: TimelineItem["status"]) => {
    if (status === "completed") return "Disponível";
    if (status === "in-progress") return "Em desenvolvimento";
    return "Em breve";
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-[#5625F2] border-[#5625F2]";
      case "in-progress": return "text-white bg-[#8350e8]/60 border-[#8350e8]";
      case "pending": return "text-white/70 bg-white/10 border-white/20";
      default: return "text-white/70 bg-white/10 border-white/20";
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "600px", background: "transparent" }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center orb */}
          <div style={{
            position: "absolute",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #5625F2, #8350e8, #a78bfa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            boxShadow: "0 0 40px rgba(86,37,242,0.5)",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}>
            <div style={{
              position: "absolute",
              width: "80px", height: "80px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              animation: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
            }} />
            <div style={{
              width: "28px", height: "28px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
            }} />
          </div>

          {/* Orbit ring */}
          <div style={{
            position: "absolute",
            width: "380px", height: "380px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }} />

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                style={{
                  position: "absolute",
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                  transition: "transform 0.7s ease, opacity 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Glow aura */}
                <div style={{
                  position: "absolute",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(131,80,232,0.25) 0%, rgba(131,80,232,0) 70%)`,
                  width: `${item.energy * 0.4 + 48}px`,
                  height: `${item.energy * 0.4 + 48}px`,
                  left: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                  top: `-${(item.energy * 0.4 + 48 - 40) / 2}px`,
                  animation: isPulsing ? "pulse 1s infinite" : "none",
                  pointerEvents: "none",
                }} />

                {/* Node circle */}
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isExpanded ? "#5625F2" : isRelated ? "rgba(131,80,232,0.5)" : "rgba(31,35,40,0.9)",
                  border: `2px solid ${isExpanded ? "#8350e8" : isRelated ? "#a78bfa" : "rgba(255,255,255,0.25)"}`,
                  boxShadow: isExpanded ? "0 0 20px rgba(86,37,242,0.6)" : "none",
                  transform: isExpanded ? "scale(1.4)" : "scale(1)",
                  transition: "all 0.3s ease",
                  color: "white",
                }}>
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div style={{
                  position: "absolute",
                  top: "52px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  whiteSpace: "nowrap",
                  fontSize: "var(--text-xs)",
                  fontFamily: "var(--font)",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  color: isExpanded ? "#fff" : "rgba(255,255,255,0.65)",
                  transition: "color 0.3s",
                  textAlign: "center",
                }}>
                  {item.title}
                </div>

                {isExpanded && (
                  <Card style={{
                    position: "absolute",
                    top: "72px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "320px",
                    background: "rgba(15,15,24,0.97)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(131,80,232,0.35)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(86,37,242,0.15)",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "-8px", left: "50%",
                      transform: "translateX(-50%)",
                      width: "1px", height: "8px",
                      background: "rgba(131,80,232,0.6)",
                    }} />
                    <CardHeader style={{ padding: "20px 24px 12px" }}>
                      <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                        {item.date}
                      </span>
                      <CardTitle style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "white",
                        lineHeight: 1.3,
                        fontFamily: "var(--font)",
                        letterSpacing: "-0.02em",
                        margin: 0,
                      }}>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent style={{ padding: "0 24px 20px" }}>
                      <p style={{
                        fontSize: "13px",
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.68)",
                        fontFamily: "var(--font)",
                        margin: 0,
                      }}>{item.content}</p>

                      {item.relatedIds.length > 0 && (
                        <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                            <Link size={10} style={{ color: "rgba(255,255,255,0.4)", marginRight: "6px" }} />
                            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font)", fontWeight: 600 }}>
                              Relacionado
                            </span>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  style={{
                                    height: "28px",
                                    padding: "0 12px",
                                    fontSize: "11px",
                                    borderRadius: "6px",
                                    border: "1px solid rgba(131,80,232,0.4)",
                                    background: "rgba(131,80,232,0.12)",
                                    color: "rgba(255,255,255,0.85)",
                                    cursor: "pointer",
                                    fontFamily: "var(--font)",
                                    fontWeight: 500,
                                  }}
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={9} style={{ marginLeft: "5px" }} />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
