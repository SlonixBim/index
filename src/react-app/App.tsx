import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import CoursesPage from "@/react-app/pages/Courses";
import CourseDetailPage from "@/react-app/pages/CourseDetail";
import EnrollPage from "@/react-app/pages/Enroll";
import PrivacyPolicyPage from "@/react-app/pages/PrivacyPolicy";
import TermsAndConditionsPage from "@/react-app/pages/TermsAndConditions";
import OurStoryPage from "@/react-app/pages/OurStory";

export default function App() {
  return (
    <Router>
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
