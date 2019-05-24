# Warunkowe blokowanie wyświetlania &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Sekretna skrytka (~ 5min - 10min)

Stwórz komponent `SecretStuff`.

Przyjmuje on z props `pwd`, `correctPwd` oraz `secret`.

Jeżeli atrybuty `pwd` i `correctPwd` były takie same, to wyświetlany jest `div`, a w nim to co znajduje się w `secret`. W przeciwnym wypadku zablokuj renderowanie.

Wyrenderuj i przetestuj swój komponent. 

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

**PS. To jedynie przykład. NIGDY nie stosuj w ten sposó blokowania, ani sprawdzania poufnych informacji. Jak łatwo się domyślić takie dane NIE są sekretnie schowane :)**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 20min)
#### Udawane pobieranie danych

Stwórz komponent `AccountData`. Niech przechowuje w stanie wewnętrznym pod nazwą `data` wartość `false`.

W pliku `js/zadanie01.js` znajduje się obiekt pozwalający udawać zapytanie do zewnętrznego API. Zaimportuj go do pliku `js/app.jsx` np. za pomocą:

```import fakeAPI from './zadanie01';```

Jego użycie wygląda następująco:
```JavaScript
fakeAPI.load().then( callback );
```

Wywołanie to potrwa kilka sekund, następnie zostanie wywołana funkcja `callback` przekazana jako parametr do metody `then()`. **Jako argument zostanie do callback przekazana tablica z danymi.** Sprawdź w konsoli w jaki sposób wyglądają te dane, żeby wiedzieć jak je później zrenderować.
 
 Zaraz po zamontowaniu komponentu wywołaj ```fakeAPI.load().then( callback )```. W callbacku daj funkcję, która zmieni stan wewnętrzny `data` na dane otrzymane z API.
 
 Dopóki w `data` jest `false` zablokuj renderowanie komponentu.
 
 Jeżeli posiadasz dane to wygeneruj otrzymane dane w formie tabeli 3 kolumny na 12 wierszy.

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
