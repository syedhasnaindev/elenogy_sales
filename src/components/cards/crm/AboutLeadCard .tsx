import {
    UilBuilding,
    UilCheckCircle,
    UilClock,
    UilDollarAlt,
    UilEnvelopeAlt,
    UilFileCheckAlt,
    UilGlobe,
    UilPhone,
    UilPostcard
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { currencyFormat } from 'helpers/utils';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components/cards/AboutLeadCard.tsx
interface AboutLeadCardProps {
    lead?: {
      natural_key: string;
      status: string;
      priority: string;
      source: string;
      created_at: string;
    };
    contacts?: {
      name: string;
      email: string;
      phone: string;
      role: string;
    }[];
  }
  
  const AboutLeadCard = ({ lead, contacts }: AboutLeadCardProps) => (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-2">About Lead</h5>
        <p className="mb-1"><strong>Status:</strong> {lead?.status}</p>
        <p className="mb-1"><strong>Priority:</strong> {lead?.priority}</p>
        <p className="mb-0"><strong>Source:</strong> {lead?.source}</p>
        
        <h6 className="mt-3">Contacts</h6>
        {contacts?.map(contact => (
          <div key={contact.email} className="mb-2">
            <p className="mb-0"><strong>{contact.name}</strong></p>
            <p className="mb-0">{contact.role}</p>
            <p className="mb-0">{contact.email}</p>
            <p className="mb-0">{contact.phone}</p>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
  
  export default AboutLeadCard;