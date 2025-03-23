import { ProjectList } from "@/app/projects/components/ProjectList";
import { ProjectListSkeleton } from "@/app/projects/components/ProjectListSkeleton";
import { Suspense } from "react";

const ProjectPage = async () => {
  return (
    <div className="w-full mx-auto max-w-7xl mt-8">
      <span className="text-4xl font-bold text-primary flex justify-center">
        Projects
      </span>
      <div className="mt-12 flex flex-col gap-4">
        <Suspense fallback={<ProjectListSkeleton />}>
          <ProjectList />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectPage;
