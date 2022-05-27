import { useState } from 'react';
import secondsToTime from '../utils/secondsToTime';
import useInterval from '../hooks/useInterval';

interface Props {
  defaultPomodoroTime: number;
}

function PomodoroTimer({ defaultPomodoroTime }: Props) {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div>
      Timer
      {' '}
      {secondsToTime(mainTime)}
    </div>
  );
}

export default PomodoroTimer;
