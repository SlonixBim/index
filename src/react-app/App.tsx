import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import CoursesPage from "@/react-app/pages/Courses";
import CourseDetailPage from "@/react-app/pages/CourseDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
      </Routes>
    </Router>
  );
}
