import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectManagementCard = ({ projects }) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'text-success bg-success/10';
      case 'pending': return 'text-warning bg-warning/10';
      case 'completed': return 'text-muted-foreground bg-muted';
      case 'delayed': return 'text-error bg-error/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <div className="glass-card p-6 rounded-xl border border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="FolderOpen" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Active Projects</h3>
            <p className="text-sm text-muted-foreground">{projects?.length} projects in progress</p>
          </div>
        </div>
        <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
          New Project
        </Button>
      </div>
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {projects?.map((project) => (
          <div key={project?.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors duration-200">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{project?.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{project?.location}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project?.status)}`}>
                {project?.status}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-muted-foreground">Budget</p>
                <p className="text-sm font-medium text-foreground">{formatCurrency(project?.budget)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Spent</p>
                <p className="text-sm font-medium text-foreground">{formatCurrency(project?.spent)}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs font-medium text-foreground">{project?.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div 
                  className="h-1.5 bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${project?.progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Due: {project?.dueDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="xs" iconName="Eye">
                  <span className="sr-only">View project</span>
                </Button>
                <Button variant="ghost" size="xs" iconName="Edit">
                  <span className="sr-only">Edit project</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-border">
        <Button variant="outline" fullWidth iconName="FolderOpen" iconPosition="left">
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectManagementCard;