import { useMemo, useState } from "react";
import { createTheme } from '@mui/material/styles';



export function ToggleColorMode() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                console.log("Toggle color mode called");
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );
// won't do anything
    colorMode
    console.log("Rendered with mode:", mode); // Add this line to log the current mode during each render

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <>
        [{theme}]
        </>
    );
}
