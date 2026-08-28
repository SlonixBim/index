import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { useRef, useLayoutEffect } from "react";
import HomePage from "@/react-app/pages/Home";
import CoursesPage from "@/react-app/pages/Courses";
import CourseDetailPage from "@/react-app/pages/CourseDetail";
import EnrollPage from "@/react-app/pages/Enroll";
import PrivacyPolicyPage from "@/react-app/pages/PrivacyPolicy";
import TermsAndConditionsPage from "@/react-app/pages/TermsAndConditions";
import OurStoryPage from "@/react-app/pages/OurStory";

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  // Scroll during render phase — fires before browser paints
  if (prevPath.current !== pathname) {
    prevPath.current = pathname;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  // Backup: also scroll in useLayoutEffect (runs after DOM commit, before paint)
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/enroll/:courseId" element={<EnrollPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </Router>
  );
}
