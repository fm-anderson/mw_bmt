function Toast({ message, type }: { message: string; type: string }) {
  return (
    <div className="toast toast-center toast-middle">
      <div className={`alert !alert-${type} px-8 shadow-md`}>
        <div className="flex gap-2">
          <span className="text-xl font-semibold">{message}</span>
          <span className="text-md">🎉</span>
        </div>
      </div>
    </div>
  );
}

export default Toast;
