import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { useEffect, useRef } from "react"

type EditorProps = {
  editorId: string
  jsonData: object
}

export default function JsonEditor({ editorId, jsonData }: EditorProps) {
  const jsonSchemaEditorRef = useRef(null)

  const jsonDataString = JSON.stringify(jsonData, null, 2) // Format JSON with indentation

  useEffect(() => {
    let disposed = false
    if (!editorId) return

      ; (async () => {
        // ワーカー初期化を必要時のみ読み込み
        await import("../userWorker")

        if (disposed) return

        // @ts-expect-error - monaco-editor does not accept null refs
        jsonSchemaEditorRef.current = monaco.editor.create(
          // @ts-expect-error - monaco-editor does not accept null refs
          document.getElementById(editorId),
          {
            value: jsonDataString,
            language: "json",
            theme: "vs-dark",
            readOnly: true,
            automaticLayout: true,
            wordWrap: true,
          },
        )
      })()

    return () => {
      disposed = true
      if (jsonSchemaEditorRef.current) {
        // @ts-expect-error - monaco-editor type definitions are incomplete
        jsonSchemaEditorRef.current.dispose()
      }
    }
  }, [editorId, jsonDataString])

  return <div id={editorId} style={{ flex: 1, overflow: "auto" }} />
}
