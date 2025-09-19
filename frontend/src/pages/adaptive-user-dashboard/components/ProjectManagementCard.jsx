import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectManagementCard = ({ projects, onCreateProject }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'in-progress': return 'text-blue-600 bg-blue-50';
      case 'planning': return 'text-yellow-600 bg-yellow-50';
      case 'on-hold': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <div className="glass-card rounded-2xl p-6" style={{ zIndex: 10 }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Project Management</h2>
        <Button
          variant="outline"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={onCreateProject}
        >
          New Project
        </Button>
      </div>
      <div className="space-y-4">
        {projects?.slice(0, 3)?.map((project) => (
          <div
            key={project?.id}
            className="group p-4 rounded-xl glass-card hover:glass-card-premium transition-all duration-200 precision-hover"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {project?.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{project?.location}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
                {project?.status}
              </div>
            </div>

            <div className="space-y-3">
              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{project?.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project?.progress)}`}
                    style={{ width: `${project?.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={14} className="text-gray-400" />
                  <span className="text-gray-600">Due: {new Date(project.dueDate)?.toLocaleDateString('en-IN')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="IndianRupee" size={14} className="text-gray-400" />
                  <span className="text-gray-600">₹{project?.budget?.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{project?.teamSize} members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    asChild
                  >
                    <Link to={`/business?project=${project?.id}`}>
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Edit"
                    iconPosition="left"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {projects?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="FolderPlus" size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-500 mb-4">Create your first project to get started</p>
          <Button
            variant="default"
            iconName="Plus"
            iconPosition="left"
            onClick={onCreateProject}
          >
            Create Project
          </Button>
        </div>
      )}
      {projects?.length > 3 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button
            variant="ghost"
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
            asChild
          >
            <Link to="/business">
              View All Projects
            </Link>
          </Button>
        </div>
      )}
      </div>
    </div>
  );
};

export default ProjectManagementCard;