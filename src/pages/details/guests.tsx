import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import Button from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  isConfirmed: boolean;
}

const Guests = () => {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>

      <div className="space-y-5">
        {participants.map((participant, index) => (
          <div
            className="flex items-center justify-between gap-4"
            key={participant.id}
          >
            <div className="space-y-1.5">
              <span className="text-zinc-100 font-medium block">
                {participant.name || "convidado " + index}
              </span>
              <span className="block text-xs text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {participant.isConfirmed ? (
              <CheckCircle2 className="size-5 text-green-400 shrink-0" />
            ) : (
              <CircleDashed className="size-5 text-zinc-400 shrink-0" />
            )}
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
};

export default Guests;
