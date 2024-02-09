import React, { useEffect, useState } from "react";
import Trelo from "../../Pages/Trelo/Trelo.js"

export default function TreloCard({string})
{
    return(
        <li draggable="true" onDragStart={(e) => Trelo.drag(e)} id="drag1">{string}</li>
    )
}

