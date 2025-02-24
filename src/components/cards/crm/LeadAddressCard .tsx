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

// components/cards/LeadAddressCard.tsx
interface LeadAddressCardProps {
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  }
  
  const LeadAddressCard = ({ address }: LeadAddressCardProps) => (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-2">Address</h5>
        {address ? (
          <>
            <p className="mb-0">{address.street}</p>
            <p className="mb-0">{address.city}, {address.state} {address.zip}</p>
          </>
        ) : (
          <p className="mb-0 text-muted">No address available</p>
        )}
      </Card.Body>
    </Card>
  );
  
  export default LeadAddressCard;