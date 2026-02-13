// Re-export all types from data for convenience
export type { Experiment } from "../data/experiments";
export type { NavItem } from "../data/navigation";
export type { Project } from "../data/projects";
export type { Service } from "../data/services";
export type { StackItem } from "../data/stack";

// Animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
}

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}
