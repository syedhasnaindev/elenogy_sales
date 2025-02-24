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

// components/cards/LeadProfileCard.tsx
interface LeadProfileCardProps {
    lead?: {
        natural_key: string;
        status: string;
        priority: string;
        source: string;
        created_at: string;
    };
    institute?: {
        institute_name: string;
        status: string;
    };
}

const LeadProfileCard = ({ lead, institute }: LeadProfileCardProps) => (
    <Card className="mb-3">
        <Card.Body>
            <h5 className="mb-2">{lead?.natural_key}</h5>
            <p className="mb-1"><strong>Institute:</strong> {institute?.institute_name}</p>
            <p className="mb-1"><strong>Status:</strong> {lead?.status}</p>
            <p className="mb-0"><strong>Source:</strong> {lead?.source}</p>
        </Card.Body>
    </Card>
);

export default LeadProfileCard;