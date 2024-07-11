import { Calendar, Tag, X } from "lucide-react";
import Button from "../../components/button";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { FormEvent } from "react";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

const CreateActivityModal = ({
  closeCreateActivityModal,
}: CreateActivityModalProps) => {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      occurs_at,
      title,
    });

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Cadastrar atividade</h2>
            <button
              onClick={closeCreateActivityModal}
              className="text-zinc-400"
            >
              <X className="size-5" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atvidades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 ">
            <Tag className="size-4 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg text-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 ">
              <Calendar className="size-4 text-zinc-400" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horario da atividade"
                className="bg-transparent text-lg text-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivityModal;
