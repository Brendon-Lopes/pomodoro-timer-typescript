import secondsToTime from '../utils/secondsToTime';

interface Props {
  mainTime: number;
}

function Timer({ mainTime }: Props) {
  return (
    <div>
      {secondsToTime(mainTime)}
    </div>
  );
}

export default Timer;
