import { useSyncExternalStore } from "react";
import api from "../services/api";


type User = {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  horario: string;
  pelagem: string;
  especie: string;
  raca: string;
};

export async function getAllUser(): Promise<User[]> {
 
    const response = await api.get('user');
    const { results } = response.data;

    const payloadUser: User[] = await Promise.all(
      results.map(async (user: { name: string; lastName: string; cpf:string;
         email:string; horario: string; pelagem: string; especie: string; raca: string;
        }) => {
      
        return {
          name: user.name,
          lastName: user.lastName,
          cpf: user.cpf,
          email: user.email,
          horario: user.horario,
          pelagem: user.pelagem,
          especie: user.pelagem,
          raca: user.raca

        };
      }) ,
    );

    return payloadUser;
  // } catch (error) {
  //   console.error("Error User", error);
  //   throw error;
  
 }
