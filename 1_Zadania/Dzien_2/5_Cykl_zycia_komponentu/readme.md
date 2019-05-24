# Cykl życia komponentu &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**


**Od teraz wszystkie zadania wykonuj tylko z komponentami w wersji zbudowanej z klas ES6** 

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1 (~ 10min - 15min)
#### Komponent LifeCyclesTester - pojawienie się komponentu na stronie 

Stwórz komponent `LifeCyclesTester`.

Komponent ma wypisywać w konsoli : "konstructor", "komponent będzie zamontowany", "komponent został zamontowany", "komponent odmontowywany", "renderowanie", itp., dla **odpowiednich typów metod cyklu życia**.

Wyrenderuj swój komponent bezpośrednio korzystając z `ReactDOM.render()`.

Spójrz do konsoli. Jakie metody cyklu życia zostały uruchomione, a jakie nie? Dlaczego?

**Tym razem nie twórz głównego komponentu `App`.**

