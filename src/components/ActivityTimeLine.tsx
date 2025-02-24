// components/modules/crm/ActivityTimeline.tsx
import { useState, useEffect } from 'react';
import { ListGroup, Card, Button, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPhone, 
  faEnvelope, 
  faCalendarDay,
  faTimes 
} from '@fortawesome/free-solid-svg-icons';
import apiHooks from '../hooks/apiHooks';

interface Activity {
  activity_id: string;
  activity_type: string;
  description: string;
  activity_date: string;
  related_to_id: string;
}

interface ActivityTimelineProps {
  leadId: string;
}

const ActivityTimeline = ({ leadId }: ActivityTimelineProps) => {
  const { data: allActivities, loading } = apiHooks.useCRMActivities();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newActivity, setNewActivity] = useState({
    activity_type: 'Call',
    description: '',
    activity_date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (allActivities) {
      const filtered = allActivities.filter(activity => 
        activity.related_to_id === leadId
      );
      setActivities(filtered);
    }
  }, [allActivities, leadId]);

  const handleAddActivity = async () => {
    try {
      // Replace with your actual service call
      const response = await Promise.resolve({
        ...newActivity,
        activity_id: Math.random().toString(),
        related_to_id: leadId
      });
      
      setActivities(prev => [response, ...prev]);
      setShowModal(false);
      setNewActivity({
        activity_type: 'Call',
        description: '',
        activity_date: new Date().toISOString().split('T')[0],
      });
    } catch (error) {
      console.error('Error creating activity:', error);
    }
  };

  const getActivityIcon = (type: string) => {
    const icons = {
      Call: faPhone,
      Email: faEnvelope,
      Meeting: faCalendarDay
    };
    return <FontAwesomeIcon icon={icons[type as keyof typeof icons]} className="me-2" />;
  };

  return (
    <Card className="mb-4">
      <Card.Header className="bg-body-tertiary d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Activities Timeline</h5>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Activity
        </Button>
      </Card.Header>
      
      <Card.Body>
        <ListGroup variant="flush">
          {activities.map(activity => (
            <ListGroup.Item key={activity.activity_id}>
              <div className="d-flex align-items-start">
                <div className="me-3 text-primary">
                  {getActivityIcon(activity.activity_type)}
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-1">{activity.activity_type}</h6>
                    <small className="text-body-secondary">
                      {new Date(activity.activity_date).toLocaleDateString()}
                    </small>
                  </div>
                  <p className="mb-0 text-body-secondary">
                    {activity.description}
                  </p>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-body-tertiary">
          <Modal.Title>Log New Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Activity Type</Form.Label>
              <Form.Select
                value={newActivity.activity_type}
                onChange={(e) => setNewActivity({ 
                  ...newActivity, 
                  activity_type: e.target.value 
                })}
              >
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="Meeting">Meeting</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newActivity.activity_date}
                onChange={(e) => setNewActivity({ 
                  ...newActivity, 
                  activity_date: e.target.value 
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newActivity.description}
                onChange={(e) => setNewActivity({ 
                  ...newActivity, 
                  description: e.target.value 
                })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-body-tertiary">
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            <FontAwesomeIcon icon={faTimes} className="me-2" />
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddActivity}>
            Save Activity
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ActivityTimeline;