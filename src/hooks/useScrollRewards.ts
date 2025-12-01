import { useState, useEffect, useCallback } from 'react';

interface ScrollRewardConfig {
  viewHero: number;
  viewFeatures: number;
  viewPricing: number;
  viewFAQ: number;
  scrollComplete: number;
  timeOnPage: number; // points per 10 seconds
  totalNeeded: number;
}

const DEFAULT_CONFIG: ScrollRewardConfig = {
  viewHero: 10,
  viewFeatures: 15,
  viewPricing: 20,
  viewFAQ: 15,
  scrollComplete: 40,
  timeOnPage: 1,
  totalNeeded: 100,
};

interface ViewedSections {
  hero: boolean;
  features: boolean;
  pricing: boolean;
  faq: boolean;
  complete: boolean;
}

export function useScrollRewards(config: ScrollRewardConfig = DEFAULT_CONFIG) {
  const [points, setPoints] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('scrollRewardPoints');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [viewedSections, setViewedSections] = useState<ViewedSections>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('viewedSections');
      return saved ? JSON.parse(saved) : {
        hero: false,
        features: false,
        pricing: false,
        faq: false,
        complete: false,
      };
    }
    return {
      hero: false,
      features: false,
      pricing: false,
      faq: false,
      complete: false,
    };
  });

  const [rewardClaimed, setRewardClaimed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('scrollRewardClaimed') === 'true';
    }
    return false;
  });

  const [timeSpent, setTimeSpent] = useState<number>(0);

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Award points for time spent (every 10 seconds)
  useEffect(() => {
    if (timeSpent > 0 && timeSpent % 10 === 0 && points < config.totalNeeded && !rewardClaimed) {
      setPoints((prev) => {
        const newPoints = Math.min(prev + config.timeOnPage, config.totalNeeded);
        localStorage.setItem('scrollRewardPoints', newPoints.toString());
        return newPoints;
      });
    }
  }, [timeSpent, config.timeOnPage, config.totalNeeded, points, rewardClaimed]);

  // Check if section is in viewport
  const checkSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Consider section viewed if at least 30% is visible
    return rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
  }, []);

  // Track scroll and award points
  useEffect(() => {
    if (rewardClaimed) return;

    const handleScroll = () => {
      const newViewed = { ...viewedSections };
      let pointsToAdd = 0;

      // Check each section
      if (!viewedSections.hero && checkSection('hero')) {
        newViewed.hero = true;
        pointsToAdd += config.viewHero;
      }
      if (!viewedSections.features && checkSection('features')) {
        newViewed.features = true;
        pointsToAdd += config.viewFeatures;
      }
      if (!viewedSections.pricing && checkSection('pricing')) {
        newViewed.pricing = true;
        pointsToAdd += config.viewPricing;
      }
      if (!viewedSections.faq && checkSection('faq')) {
        newViewed.faq = true;
        pointsToAdd += config.viewFAQ;
      }

      // Check if scrolled to bottom
      if (!viewedSections.complete) {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const clientHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight - 100) {
          newViewed.complete = true;
          pointsToAdd += config.scrollComplete;
        }
      }

      if (pointsToAdd > 0) {
        setViewedSections(newViewed);
        localStorage.setItem('viewedSections', JSON.stringify(newViewed));
        
        setPoints((prev) => {
          const newPoints = Math.min(prev + pointsToAdd, config.totalNeeded);
          localStorage.setItem('scrollRewardPoints', newPoints.toString());
          return newPoints;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewedSections, checkSection, config, rewardClaimed]);

  const claimReward = useCallback(() => {
    if (points >= config.totalNeeded && !rewardClaimed) {
      setRewardClaimed(true);
      localStorage.setItem('scrollRewardClaimed', 'true');
      return true;
    }
    return false;
  }, [points, config.totalNeeded, rewardClaimed]);

  const resetProgress = useCallback(() => {
    setPoints(0);
    setViewedSections({
      hero: false,
      features: false,
      pricing: false,
      faq: false,
      complete: false,
    });
    setRewardClaimed(false);
    setTimeSpent(0);
    localStorage.removeItem('scrollRewardPoints');
    localStorage.removeItem('viewedSections');
    localStorage.removeItem('scrollRewardClaimed');
  }, []);

  return {
    points,
    maxPoints: config.totalNeeded,
    progress: (points / config.totalNeeded) * 100,
    rewardClaimed,
    claimReward,
    resetProgress,
    viewedSections,
    timeSpent,
  };
}
