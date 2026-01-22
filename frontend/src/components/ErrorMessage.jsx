export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-40 text-center">
      <p className="text-red-500 text-lg mb-3">{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Retry
        </button>
      )}
    </div>
  );
}
