type Props = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export const OptionItem = ({ label, active, onClick }: Props) => {
  return (
    <div className={`option ${active ? 'active' : ''}`} onClick={onClick}>
      {label}
    </div>
  );
};