import {snakeCase} from 'lodash';
import {useState} from 'react';
import RunDetailAutomateDefinition from 'components/RunDetailAutomateDefinition';
import RunDetailAutomateMethods from 'components/RunDetailAutomateMethods';
import CliCommand from 'components/RunDetailAutomateMethods/methods/CLICommand';
import DeepLink from 'components/RunDetailAutomateMethods/methods/DeepLink';
import {CLI_RUNNING_TESTS_URL} from 'constants/Common.constants';
import Test from 'models/Test.model';
import TestRun from 'models/TestRun.model';
import {useEnvironment} from 'providers/Environment/Environment.provider';
import {ResourceType} from 'types/Resource.type';
import * as S from './RunDetailAutomate.styled';

interface IProps {
  test: Test;
  run: TestRun;
}

const RunDetailAutomate = ({test, run}: IProps) => {
  const [fileName, setFileName] = useState<string>(`${snakeCase(test.name)}.yaml`);
  const {selectedEnvironment: {id: environmentId} = {}} = useEnvironment();

  return (
    <S.Container>
      <S.SectionLeft>
        <RunDetailAutomateDefinition
          id={test.id}
          version={test.version}
          resourceType={ResourceType.Test}
          fileName={fileName}
          onFileNameChange={setFileName}
        />
      </S.SectionLeft>
      <S.SectionRight>
        <RunDetailAutomateMethods
          resourceType={ResourceType.Test}
          methods={[
            {
              id: 'cli',
              label: 'CLI',
              children: (
                <CliCommand
                  id={test.id}
                  environmentId={environmentId}
                  fileName={fileName}
                  resourceType={ResourceType.Test}
                  docsUrl={CLI_RUNNING_TESTS_URL}
                />
              ),
            },
            {
              id: 'deeplink',
              label: 'Deep Link',
              children: <DeepLink test={test} environmentId={environmentId} run={run} />,
            },
          ]}
        />
      </S.SectionRight>
    </S.Container>
  );
};

export default RunDetailAutomate;
