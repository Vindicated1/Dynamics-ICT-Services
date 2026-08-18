export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

export const trustedClients: ClientLogo[] = [
  {
    id: "client-1",
    name: "Client One",
    logo: "/images/clients/client-1.png",
  },
  {
    id: "client-2",
    name: "Client Two",
    logo: "/images/clients/client-2.png",
  },
  {
    id: "client-3",
    name: "Client Three",
    logo: "/images/clients/client-3.png",
  },
  {
    id: "client-4",
    name: "Client Four",
    logo: "/images/clients/client-4.png",
  },
  {
    id: "client-5",
    name: "Client Five",
    logo: "/images/clients/client-5.png",
  },
  {
    id: "client-6",
    name: "Client Six",
    logo: "/images/clients/client-6.png",
  },
];