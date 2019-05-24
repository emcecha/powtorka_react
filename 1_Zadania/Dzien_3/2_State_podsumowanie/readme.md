# Przekazywanie informacji &ndash; zadania

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

### Zegar (~ 10min - 15min)

Stwórz komponent `Clock`, który przechowuje w state aktualną datę.

Dodaj timer do swojego komponentu, który co 1 sekundę aktualizuje datę w state na aktualną. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Stwórz dwa subkomponenty:

Pierwszy - **`ClockTime`** - przyjmuje przez props datę (`date`) i wyświetla samą godzinę w elemencie `h1` za pomocą `Date.toLocaleTimeString()`.

Drugi - **`ClockDate`** - przyjmuje przez props datę (`date`) i wyświetla samą datę w elemencie `h1` za pomocą `Date.toLocaleDateString()`.

Główny komponent - `Clock` renderuje odpowiednio dwa subkomponenty przekazując im aktualną datę ze swojego state.

Zrenderuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min)
#### Modyfikacja zadania z zegarem - kompozycja

Zmodyfikuj komponenty `ClockTime` i `ClockDate` z zadania z wykładowcą.

Zwiększ podział tych komponentów na następujące:
- **`ClockTimeHour`** - wyświetla godzinę za pomocą `Date.getHours()`
- **`ClockTimeMinute`** - wyświetla minuty za pomocą `Date.getMinutes()`
- **`ClockTimeSecond`** - wyświetla sekundy za pomocą `Date.getSeconds()`
- **`ClockDateYear`** - wyświetla rok za pomocą `Date.getFullYear()`
- **`ClockDateMonth`** - wyświetla miesiąc za pomocą `Date.getMonth()` (uwaga, ta metoda zwraca 0 jako styczeń, 1 jako luty itd. Dodaj 1, żeby wyświetlić prawidłowo)
- **`ClockDateDay`** - wyświetla dzień za pomocą `Date.getDate()`

Zmodyfikuj `ClockTime` i `ClockDate` tak, żeby korzystały z nowych subkomponentów.

### Zadanie 2 (~ 15min)
#### Modyfikacja zadania ze zmieniającym się światłem

Zmodyfikuj kod z zadania ze stroboskopem z poprzedniego działu.

Spraw, żeby komponent `StrobeLight` przyjmował jeszcze jeden atrybut przez props: `onOff` (wartość boolean).

Jeżeli `onOff` ustawiony jest na `false` to przeciwdziała zmianie światła.

Stwórz komponent `StrobeControl`, który powinien renderować kilka przykładowych `StrobeLight` z `onOff` ustawionym na `true`.

Niech w `StrobeControl` zostanie ustawiony timer, który po 5 sekundach ustawi wszystkim swoim `StrobeLight` wartość `onOff` na `false`. **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.** Skorzystaj ze state do przechowania wartości jaka ma być przekazywana subkomponentom.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
