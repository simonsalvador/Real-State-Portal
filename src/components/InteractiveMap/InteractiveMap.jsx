import { MapIcon } from "lucide-react";

const InteractiveMap = () => (
  <div className="bg-white rounded-lg shadow-lg p-4 h-96 flex items-center justify-center">
    <MapIcon className="h-16 w-16 text-gray-400" />
    <span className="ml-4 text-gray-500">Interactive Map View</span>
  </div>
);

export default InteractiveMap;
