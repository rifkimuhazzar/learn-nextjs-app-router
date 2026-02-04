export default function Messages({ messages }: any) {
  return (
    <ul className="messages">
      {messages.map((message: any) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
  );
}
