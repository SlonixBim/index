export interface Course {
  id: string;
  title: string;
  category: string;
  gradient: string;
  duration: string;
  level: string;
  description: string;
  fullDescription: string;
  rating: number;
  students: number;
  instructor: string;
  whatYouWillLearn: string[];
  curriculum: {
    module: string;
    topics: string[];
  }[];
  prerequisites: string[];
  imageUrl: string;
}

// Dynamically import all JSON files from the courses content directory
const courseModules = import.meta.glob('../content/courses/*.json', { eager: true });

// Convert the imported modules into an array of courses
export const courses: Course[] = Object.values(courseModules).map((mod: any) => {
  return mod.default || mod;
});
