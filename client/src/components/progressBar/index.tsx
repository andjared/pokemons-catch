export interface IProgressBar {
  progress: number;
  className?: string;
}

export const ProgressBar = ({ progress }: IProgressBar) => {
  return (
    <div className="h-1 w-full bg-neutral-200">
      <div className="h-1 bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
