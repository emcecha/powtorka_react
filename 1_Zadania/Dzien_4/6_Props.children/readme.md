# props.children &ndash; zadania

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

### Dzieci i wnuki (~ 5min - 15min)

Stwórz komponenty `ParentComponent`, `ChildComponent` oraz `GrandchildComponent`.

Niech `ParentComponent` renderuje `ChildComponent`, przekazując mu jako dzieci swoje dzieci.

`ChildComponent` renderuje `GrandchildComponent`, przekazując mu jako dzieci swoje dzieci.
 
 `GrandchildComponent` po prostu wyświetla swoje dzieci.

Wyrenderuj i przetestuj swój komponent, za pomocą takiej konstrukcji:
```JSX
<ParentComponent>
    <h1>To działa!</h1>
</ParentComponent>
```

Kod ten powinien wyświetlić taką strukturę:
```
-- ParentComponent
    |-- ChildComponent
          |-- GrandchildComponent
                |-- <h1>To działa!</h1>
```

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min - 15min)
#### Pokazywanie dzieci

Stwórz komponent `ShowMore`. Działa on tak, że wyświetla link `a` z napisem "Pokaż więcej".

Po kliknięciu na element `a`, znika on (przestań go w ogóle renderować), a zamiast niego pojawia się treść. Treścią są dzieci tego komponentu.

Wyrenderuj i przetestuj swój komponent, używając takiej konstrukcji:
```JSX
<ShowMore>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
</ShowMore>
```

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
