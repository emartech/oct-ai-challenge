export default function ParticipantCounter() {
  return (
    <div className="mb-4">
      <div className="bg-white rounded-2xl pt-6 max-w-6xl mx-auto text-center">
        <p className="text-oct-blue text-xl md:text-2xl font-semibold mb-2">
          Join the growing community of AI enthusiasts!
        </p>
        <p className="text-gray-600 text-base">
          The number of participants who already <strong>secured their seat</strong>:
        </p>
        <iframe 
          width="100" 
          height="100" 
          style={{ border: 'none', background: 'transparent', margin: '0 auto' }} 
          src="https://lookerstudio.google.com/embed/reporting/bf97da25-8a7b-48db-9576-34fb19b1c709/page/o8sXF" 
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  )
}