import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Finder = () => {
  const [selectedFolder, setSelectedFolder] = useState('All Projects');
  
  const projects = {
    'All Projects': [
      { name: 'E-commerce Platform', type: 'Web App', date: '2024-03-15', preview: '/projects/ecommerce.jpg' },
      { name: 'Mobile Banking App', type: 'iOS/Android', date: '2024-02-20', preview: '/projects/banking.jpg' },
      { name: 'Restaurant Website', type: 'Website', date: '2024-01-10', preview: '/projects/restaurant.jpg' },
      { name: 'Fitness Tracker', type: 'Mobile App', date: '2023-12-15', preview: '/projects/fitness.jpg' }
    ],
    'Web Apps': [
      { name: 'E-commerce Platform', type: 'Web App', date: '2024-03-15', preview: '/projects/ecommerce.jpg' }
    ],
    'Mobile': [
      { name: 'Mobile Banking App', type: 'iOS/Android', date: '2024-02-20', preview: '/projects/banking.jpg' },
      { name: 'Fitness Tracker', type: 'Mobile App', date: '2023-12-15', preview: '/projects/fitness.jpg' }
    ],
    'Websites': [
      { name: 'Restaurant Website', type: 'Website', date: '2024-01-10', preview: '/projects/restaurant.jpg' }
    ]
  };

  const folders = Object.keys(projects);

  return (
    <div className="finder">
      <div className="finder-header">
        <div className="window-controls">
          <span className="control close"></span>
          <span className="control minimize"></span>
          <span className="control maximize"></span>
        </div>
        <div className="finder-title">Pixel Craft Co. Projects</div>
      </div>
      <div className="finder-content">
        <div className="finder-sidebar">
          {folders.map((folder) => (
            <motion.div
              key={folder}
              className={`folder ${selectedFolder === folder ? 'active' : ''}`}
              onClick={() => setSelectedFolder(folder)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="folder-icon">📁</span>
              {folder}
            </motion.div>
          ))}
        </div>
        <div className="finder-main">
          <div className="finder-toolbar">
            <div className="view-controls">
              <button className="icon-view">Icons</button>
              <button className="list-view active">List</button>
            </div>
          </div>
          <div className="finder-items">
            {projects[selectedFolder].map((project, index) => (
              <motion.div
                key={project.name}
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-icon">
                  <img src={project.preview} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                  <span className="project-date">{project.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder; 