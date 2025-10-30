import React, { useContext, useEffect, useState } from "react";
import "./Projects.css";
//import { supabase } from "../lib/superBaseClient";
import Loading from "./Loading"

interface Project {
  id: number;
  title: string;
  location: string;
  year: number;
  thumbnail: string | null;
}

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);
    //   const projects: Project[] = [
    //     {
    //       id: 1,
    //       title: "Tridasa My Home",
    //       thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    //       images: [
    //         "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1000&q=80",
    //         "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1000&q=80",
    //         "https://images.unsplash.com/photo-1600585154356-596af9009e82?auto=format&fit=crop&w=1000&q=80",
    //       ],
    //       location: "Bangalore",
    //       year: 2024,
    //       type: "Residential",
    //       description:
    //         "Tridasa My Home showcases modern elegance and timeless design. Each space reflects calm, balance, and luxurious detail tailored to the client’s lifestyle.",
    //     },
    //     {
    //       id: 2,
    //       title: "Sattva Commercial Tower",
    //       thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    //       images: [
    //         "https://images.unsplash.com/photo-1529429611273-4e2b3a67f0f5?auto=format&fit=crop&w=1000&q=80",
    //         "https://images.unsplash.com/photo-1556912172-45b7abe8ec3a?auto=format&fit=crop&w=1000&q=80",
    //       ],
    //       location: "Hyderabad",
    //       year: 2023,
    //       type: "Commercial",
    //       description:
    //         "A corporate workspace blending minimalism and sophistication, emphasizing natural light, functionality, and aesthetic coherence.",
    //     },
    //   ];
    // useEffect(() => {
    //     async function fetchProjects() {
    //         const { data, error } = await supabase
    //             .from("projectslist")
    //           .select(`
    //             id,
    //             title,
    //             location,
    //             year,
    //             thumbnail
    //             `)
    //             .order("year", { ascending: false });

    //         if (error) console.error("Error fetching projects:", error);
    //         else setProjects(data || []);

    //         setLoading(false);
    //     }

    //     fetchProjects();
    // }, []);

   if (loading) return <Loading />;

  return (
    <div className="projects-page">
      {!selectedProject ? (
        <>
          <h1 className="page-title">Our Projects</h1>
          <div className="project-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                onClick={() => setSelectedProject(p)}
              >
                <img
                  src={
                    p.thumbnail ||
                    "https://via.placeholder.com/400x250?text=No+Image+Available"
                  }
                  alt={p.title}
                  className="project-thumb"
                />
                <h3>{p.title}</h3>
                <p>{p.location}</p>
                <span className="year">{p.year}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="project-detail">
          <button className="back-btn" onClick={() => setSelectedProject(null)}>
            ← Back to Projects
          </button>
          <h2>{selectedProject.title}</h2>
          <img
            src={
              selectedProject.thumbnail ||
              "https://via.placeholder.com/400x250?text=No+Image"
            }
            alt={selectedProject.title}
            className="project-detail-thumb"
          />
          <div className="detail-info">
            <p><strong>Location:</strong> {selectedProject.location}</p>
            <p><strong>Year:</strong> {selectedProject.year}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
