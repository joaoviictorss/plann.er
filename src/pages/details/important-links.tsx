import { Link2, Plus } from "lucide-react";
import Button from "../../components/button";

const ImportantLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Links importantes</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-zinc-100 font-medium block">
              Reserva do AirBnb
            </span>
            <a href="#" className="block text-xs hover:text-zinc-400 truncate">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-zinc-100 font-medium block">
              Reserva do AirBnb
            </span>
            <a href="#" className="block text-xs hover:text-zinc-400 truncate">
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
};

export default ImportantLinks;
