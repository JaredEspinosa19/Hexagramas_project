//
function obtenerHexagramaValor(arreglo){
    if(arreglo.length!=6)
      throw "Error: Solo se admite arreglo de 6 valores";

    //casos para cada uno de los exagramas
    if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 1;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 2;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 3;  
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 4;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 5;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 6;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 7;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 8;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 9;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 10;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 11;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 12;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 13;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 14;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 15;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 16;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 17;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 18;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 19;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 20;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 21;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 22;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 23;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 24;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 25;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 26;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 27;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 28;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 29;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 30;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 31;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 32;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 33;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 34;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 35;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 36;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 37;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 38;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 39;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 40;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 41;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 42;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==7)
      return 43;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 44;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==8)
      return 45;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 46;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 47;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 48;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 49;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 50;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==8 && arreglo[0]==7)
      return 51;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 52;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 53;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 54;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 55;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 56;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==7 && arreglo[0]==8)
      return 57;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 58;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 59;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 60;
    else if(arreglo[5]==7 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==7)
      return 61;
    else if(arreglo[5]==8 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==8)
      return 62;
    else if(arreglo[5]==8 && arreglo[4]==7 && arreglo[3]==8 && arreglo[2]==7 && arreglo[1]==8 && arreglo[0]==7)
      return 63;
    else if(arreglo[5]==7 && arreglo[4]==8 && arreglo[3]==7 && arreglo[2]==8 && arreglo[1]==7 && arreglo[0]==8)
      return 64;
}

function obtenerHexagramaID(id){
    switch (id) {
      case 1: return { titulo: "1. Ch'ien", descripcion: "Cielo. Lo creativo. El principio generador."}
      case 2: return { titulo: "2. K'un", descripcion: "Tierra. Lo receptivo. El principio pasivo."}
      case 3: return { titulo: "3. Chun", descripcion: "Acumular. El obstáculo inicial. La dificultad del comienzo."}
      case 4: return { titulo: "4. Meng", descripcion: "Juventud. El joven necio. La inmadurez."}
      case 5: return { titulo: "5. Hsü", descripcion: "Esperar. La espera. La maduración."}
      case 6: return { titulo: "6. Sung", descripcion: "Disputar. El conflicto. El pleito"}
      case 7: return { titulo: "7. Shih", descripcion: "Ejército. La legión."}
      case 8: return { titulo: "8. Pi", descripcion: "Solidaridad. La unión."}
      case 9: return { titulo: "9. Hsiao Ch'u", descripcion: "Animalito doméstico. La pequeña fuerza."}
      case 10: return { titulo: "10. Lü", descripcion: "Caminar. El porte. El paso cauteloso."}
      case 11: return { titulo: "11. Tai", descripcion: "Prosperidad. La paz. La armonía."}
      case 12: return { titulo: "12. P'i", descripcion: "Cierre. El estancamiento. Lo inerte."}
      case 13: return { titulo: "13. Tung jen", descripcion: "Hombres Reunidos. La unión comunitaria."}
      case 14: return { titulo: "14. Ta Yu", descripcion: "Gran dominio. La gran posesión. Lo que se tiene de más."}
      case 15: return { titulo: "15. Ch'ien", descripcion: "Condescendencia. La modestia. La humildad."}
      case 16: return { titulo: "16. Yü", descripcion: "Ocuparse. El entusiasmo. La algarabía."}
      case 17: return { titulo: "17. Sui", descripcion: "Conformarse. La continuidad. El seguimiento."}
      case 18: return { titulo: "18. Ku", descripcion: "Destrucción. La reconstrucción. La labor en lo corrompido."}
      case 19: return { titulo: "19. Lin", descripcion: "Acercarse. Lo que va llegando."}
      case 20: return { titulo: "20. Kuan", descripcion: "Observar. La contemplación."}
      case 21: return { titulo: "21. Shin Ho", descripcion: "Quebrar mordiendo. La dentellada. La filosa mordedura."}
      case 22: return { titulo: "22. Pi", descripcion: "Adornar. La elegancia. La gracia."}
      case 23: return { titulo: "23. Po", descripcion: "Resquebrajar. La desintegración. El derrumbe."}
      case 24: return { titulo: "24. Fu", descripcion: "Regresar. El retorno. Lo que vuelve."}
      case 25: return { titulo: "25. Wu Wang", descripcion: "Sinceridad. La inocencia. La naturalidad."}
      case 26: return { titulo: "26. Ta Ch'u", descripcion: "Fuerza educadora. El poder de lo fuerte. La gran acumulación."}
      case 27: return { titulo: "27. I", descripcion: "Nutrirse. La alimentación. Las fauces."}
      case 28: return { titulo: "28. Ta Kuo", descripcion: "Excesos. La preponderancia de lo grande."}
      case 29: return { titulo: "29. Kan", descripcion: "Peligro. Lo abismal. La caida."}
      case 30: return { titulo: "30. Li", descripcion: "Distinguir. El resplandor. Lo adherente."}
      case 31: return { titulo: "31. Hsien", descripcion: "Unir. La influencia.La atracción."}
      case 32: return { titulo: "32. Heng", descripcion: "Luna Creciente. La duración. La permanencia."}
      case 33: return { titulo: "33. Tun", descripcion: "Retirarse. EL repliegue."}
      case 34: return { titulo: "34. Ta Chuang", descripcion: "Gran fuerza. El gran vigor."}
      case 35: return { titulo: "35. Chin", descripcion: "Progresar. El avance."}
      case 36: return { titulo: "36. Ming I", descripcion: "Luz que se apaga. El oscurecimiento."}
      case 37: return { titulo: "37. Chia Jen", descripcion: "Gente de familia. El clan."}
      case 38: return { titulo: "38. K'uei", descripcion: "Contraste. La oposición. El antagonismo."}
      case 39: return { titulo: "39. Chien", descripcion: "Dificultad. El obstáculo. El impedimento."}
      case 40: return { titulo: "40. Hsieh", descripcion: "Explicar. La liberación. El alivio."}
      case 41: return { titulo: "41. Sun", descripcion: "Perder. La disminución."}
      case 42: return { titulo: "42. I", descripcion: "Evolución. El aumento. La ganancia."}
      case 43: return { titulo: "43. Kuai", descripcion: "Decidir. El desbordamiento. La resolución."}
      case 44: return { titulo: "44. Kou", descripcion: "Encontrarse. El acoplamiento."}
      case 45: return { titulo: "45. Ts'ui", descripcion: "Cosechar. La reunión. La convergencia."}
      case 46: return { titulo: "46. Sheng", descripcion: "Subir. El ascenso. La escalada."}
      case 47: return { titulo: "47. K'un", descripcion: "Angustia. La pesadumbre. El agotamiento."}
      case 48: return { titulo: "48. Ching", descripcion: "El pozo de agua. La fuente."}
      case 49: return { titulo: "49. Ko", descripcion: "Renovar. La revolución. El cambio."}
      case 50: return { titulo: "50. Ting", descripcion: "La caldera. Lo alquímico."}
      case 51: return { titulo: "51. Chen", descripcion: "Trueno. La conmoción. Lo suscitativo."}
      case 52: return { titulo: "52. Ken", descripcion: "Cimientos. La quietud. La detención."}
      case 53: return { titulo: "53. Chien", descripcion: "Evolución. El progreso gradual."}
      case 54: return { titulo: "54. Kuei Mei", descripcion: "Desposar a la hija menor. La doncella."}
      case 55: return { titulo: "55. Feng", descripcion: "Abundancia. La plenitud."}
      case 56: return { titulo: "56. Lü", descripcion: "Viajero. El andariego."}
      case 57: return { titulo: "57. Sun", descripcion: "Viento. Lo penetrante. Lo suave."}
      case 58: return { titulo: "58. Tui", descripcion: "Recogerse. La serenidad. La satisfacción."}
      case 59: return { titulo: "59. Huan", descripcion: "Confusión. La dispersión. La disolución."}
      case 60: return { titulo: "60. Chieh", descripcion: "Moderación. La restricción. La limitación."}
      case 61: return { titulo: "61. Chung Fu", descripcion: "Fe Interior. La verdad interior. La sinceridad interna."}
      case 62: return { titulo: "62. Hsiao Kuo", descripcion: "Pequeñas cosas importantes. La pequeña preponderancia."}
      case 63: return { titulo: "63. Chi Chi", descripcion: "Conclusiones. Después de la realización."}
      case 64: return { titulo: "64. Wei Chi", descripcion: "Inconcluso. Antes de la realización."}
    }
}



