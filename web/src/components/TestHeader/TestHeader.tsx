import ResourceCardActions from 'components/ResourceCard/ResourceCardActions';
import {useDashboard} from 'providers/Dashboard/Dashboard.provider';
import * as S from './TestHeader.styled';

interface IProps {
  description: string;
  id: string;
  shouldEdit: boolean;
  onEdit(): void;
  onDelete(): void;
  title: string;
  runButton: React.ReactElement;
}

const TestHeader = ({description, id, shouldEdit, onEdit, onDelete, title, runButton}: IProps) => {
  const {navigate} = useDashboard();

  return (
    <S.Container $isWhite>
      <S.Section>
        <a onClick={() => navigate(-1)} data-cy="test-header-back-button">
          <S.BackIcon />
        </a>
        <div>
          <S.Title data-cy="test-details-name">{title}</S.Title>
          <S.Text>{description}</S.Text>
        </div>
      </S.Section>
      <S.Section>
        {runButton}
        <ResourceCardActions id={id} onDelete={onDelete} onEdit={onEdit} shouldEdit={shouldEdit} />
      </S.Section>
    </S.Container>
  );
};

export default TestHeader;
