import './ErrorIndicator.css';
import icon from './deathstar.svg';

export default function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={icon} alt="Error icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}