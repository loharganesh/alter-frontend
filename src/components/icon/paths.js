const icons = {
    line: {
        folder: 'M8.317 2.75c.841 0 1.13.006 1.38.069a2.25 2.25 0 011.153.712c.169.196.303.452.68 1.204l.035.073c.204.407.363.726.588.987a2.75 2.75 0 001.41.871c.333.085.69.084 1.145.084h.892c1.133 0 1.937 0 2.566.052.62.05 1.005.147 1.31.302a3.25 3.25 0 011.42 1.42c.155.305.251.69.302 1.31.051.63.052 1.434.052 2.566v3.2c0 1.133 0 1.937-.052 2.566-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 01-1.42 1.42c-.305.155-.69.251-1.31.302-.63.052-1.433.052-2.566.052H8.4c-1.132 0-1.937 0-2.566-.052-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 01-1.42-1.42c-.155-.305-.251-.69-.302-1.31-.051-.63-.052-1.433-.052-2.566V6.8c0-.852 0-1.447.038-1.91.037-.453.107-.714.207-.911a2.25 2.25 0 01.984-.984c.197-.1.458-.17.912-.207.462-.037 1.057-.038 1.909-.038h1.517zm1.748-1.386c-.454-.114-.943-.114-1.653-.114H6.768c-.813 0-1.469 0-2 .043-.546.045-1.026.14-1.47.366a3.75 3.75 0 00-1.64 1.639c-.226.444-.32.924-.365 1.47-.043.531-.043 1.187-.043 2v8.865c0 1.092 0 1.958.057 2.655.058.714.18 1.317.46 1.869a4.75 4.75 0 002.077 2.075c.55.281 1.154.403 1.868.461.697.057 1.563.057 2.655.057H15.633c1.092 0 1.958 0 2.655-.057.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 002.075-2.076c.281-.552.403-1.155.461-1.869.057-.697.057-1.563.057-2.655v-3.266c0-1.092 0-1.958-.057-2.655-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 00-2.076-2.076c-.552-.281-1.155-.403-1.869-.461-.697-.057-1.563-.057-2.655-.057H14.789c-.575 0-.73-.005-.86-.038a1.25 1.25 0 01-.64-.396c-.087-.101-.161-.238-.418-.751l-.043-.086c-.317-.634-.536-1.072-.841-1.427a3.75 3.75 0 00-1.922-1.188zm2.465 9.106a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22V17a.75.75 0 101.5 0v-4.19l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5z',
        file: 'M13.25 2.772c-.34-.02-.784-.022-1.472-.022-1.307 0-2.245 0-2.984.056-.73.056-1.204.162-1.59.342a4.25 4.25 0 00-2.056 2.056c-.18.386-.286.86-.342 1.59-.056.739-.056 1.677-.056 2.984V14c0 1.412 0 2.427.066 3.223.064.787.188 1.295.397 1.707a4.25 4.25 0 001.858 1.857c.411.21.919.333 1.706.397.796.065 1.81.066 3.223.066 1.412 0 2.427 0 3.223-.066.787-.064 1.295-.188 1.707-.397a4.25 4.25 0 001.857-1.857c.21-.412.333-.92.397-1.707.065-.796.066-1.81.066-3.223v-3.686c0-.726-.002-1.201-.024-1.564H17.17c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27A2.75 2.75 0 0113.55 7.25c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345V2.772zm5.59 4.478a4.263 4.263 0 00-.216-.4c-.252-.41-.607-.773-1.497-1.663l-.38-.378c-.823-.824-1.158-1.154-1.535-1.393a4.246 4.246 0 00-.462-.256V4.8c0 .572 0 .957.025 1.253.023.287.065.424.111.515.12.235.311.426.546.546.091.046.228.088.515.111.296.024.68.025 1.253.025h1.64zm-4.666-5.864c-.616-.136-1.26-.136-2.304-.136h-.122c-1.27 0-2.265 0-3.067.06-.816.063-1.493.19-2.111.479a5.75 5.75 0 00-2.781 2.78c-.289.62-.416 1.296-.478 2.112-.061.802-.061 1.797-.061 3.066v4.287c0 1.371 0 2.447.07 3.311.073.88.221 1.607.557 2.265a5.75 5.75 0 002.513 2.513c.658.336 1.385.485 2.265.556.864.071 1.94.071 3.311.071h.068c1.371 0 2.447 0 3.311-.07.88-.072 1.607-.221 2.265-.557a5.75 5.75 0 002.513-2.513c.336-.658.485-1.385.556-2.265.071-.864.071-1.94.071-3.311v-3.82c0-1.128 0-1.823-.159-2.485a5.75 5.75 0 00-.688-1.662c-.356-.581-.848-1.073-1.646-1.87l-.07-.07-.379-.38-.064-.064c-.74-.739-1.194-1.194-1.726-1.533a5.75 5.75 0 00-1.844-.764zM9 11.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm0 4a.75.75 0 000 1.5h4a.75.75 0 000-1.5H9z',
        trash: 'M10.73 1.25h-.109c-.513 0-.962-.002-1.363.156a2.25 2.25 0 00-.903.65c-.276.331-.418.758-.58 1.245l-.034.103-.282.846H2a.75.75 0 000 1.5h1.293l.604 10.27.002.032c.06 1.033.109 1.853.2 2.513.095.676.242 1.246.533 1.764a4.75 4.75 0 002.058 1.94c.534.26 1.111.374 1.792.428.664.053 1.486.053 2.52.053H12.998c1.035 0 1.857 0 2.521-.053.68-.054 1.258-.167 1.792-.427a4.75 4.75 0 002.058-1.941c.291-.518.438-1.088.532-1.764.092-.66.14-1.48.201-2.513l.002-.032.604-10.27H22a.75.75 0 000-1.5h-5.46l-.281-.846-.035-.103c-.161-.487-.303-.914-.58-1.244a2.25 2.25 0 00-.902-.65c-.4-.159-.85-.158-1.363-.157H10.73zm5.252 4.5H19.206l-.6 10.182c-.062 1.072-.108 1.832-.19 2.426-.082.586-.192.948-.354 1.235a3.25 3.25 0 01-1.408 1.328c-.297.145-.665.234-1.254.28-.598.049-1.36.049-2.434.049h-1.93c-1.074 0-1.836 0-2.434-.048-.59-.047-.957-.136-1.254-.28a3.25 3.25 0 01-1.408-1.329c-.162-.287-.272-.65-.354-1.235-.082-.594-.128-1.354-.19-2.426l-.6-10.182H15.982zm-1.023-1.5l-.123-.372c-.217-.65-.273-.776-.342-.86a.75.75 0 00-.3-.216c-.1-.04-.238-.052-.924-.052h-2.54c-.686 0-.823.013-.923.052a.75.75 0 00-.301.217c-.07.083-.125.208-.342.86l-.123.371h5.918zM10.75 10a.75.75 0 00-1.5 0v7a.75.75 0 001.5 0v-7zM14 9.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4a.75.75 0 01.75-.75z',
        cross: 'M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z',
        gallary:
            'M11.566 1.25H12.434c1.651 0 2.937 0 3.968.084 1.047.086 1.897.262 2.662.652a6.75 6.75 0 012.95 2.95c.39.765.566 1.615.652 2.662.084 1.031.084 2.317.084 3.968V12.434c0 1.651 0 2.937-.084 3.968-.086 1.047-.262 1.897-.652 2.662a6.75 6.75 0 01-2.95 2.95c-.765.39-1.615.566-2.662.652-1.031.084-2.317.084-3.968.084H11.566c-1.651 0-2.937 0-3.968-.084-1.047-.086-1.897-.262-2.662-.652a6.75 6.75 0 01-2.95-2.95c-.39-.765-.566-1.615-.652-2.662-.084-1.031-.084-2.317-.084-3.968V11.566c0-1.651 0-2.937.084-3.968.086-1.047.262-1.897.652-2.662a6.75 6.75 0 012.95-2.95c.765-.39 1.615-.566 2.662-.652 1.031-.084 2.317-.084 3.968-.084zM7.72 2.83c-.954.077-1.585.228-2.103.492a5.25 5.25 0 00-2.295 2.295c-.264.518-.415 1.15-.493 2.103-.078.963-.079 2.187-.079 3.88v.8c0 1.692 0 2.917.08 3.88.022.273.05.52.085.744L6.24 13.7l.021-.021c.373-.373.684-.684.96-.918.287-.244.583-.447.938-.564a2.75 2.75 0 011.684-.012c.358.112.657.31.948.55.278.23.594.536.972.903l.022.021 2.693 2.615.54-.54.022-.022c.378-.377.694-.693.972-.93.291-.246.59-.451.95-.568a2.75 2.75 0 011.7 0c.36.117.66.322.95.568.28.237.594.552.972.93l.022.021.563.564.002-.016c.078-.963.079-2.188.079-3.88v-.8c0-1.693 0-2.917-.08-3.88-.077-.954-.228-1.585-.492-2.103a5.25 5.25 0 00-2.295-2.295c-.518-.264-1.15-.415-2.103-.493-.963-.078-2.188-.079-3.88-.079h-.8c-1.693 0-2.917 0-3.88.08zM5.617 20.677a5.25 5.25 0 01-2.175-2.072.753.753 0 00.088-.076l3.77-3.77c.4-.4.669-.667.892-.857.216-.184.341-.25.437-.282a1.25 1.25 0 01.766-.006c.096.03.222.095.441.276.226.187.498.45.904.844l3.22 3.126 3.201 3.201a9.605 9.605 0 01-.881.109c-.963.078-2.188.079-3.88.079h-.8c-1.693 0-2.917 0-3.88-.08-.954-.077-1.585-.228-2.103-.492zm15.06-2.295a5.25 5.25 0 01-1.963 2.11l-3.167-3.167.533-.532c.405-.405.677-.677.903-.869.22-.187.347-.254.443-.285a1.25 1.25 0 01.773 0c.096.031.223.098.443.285.226.192.498.463.903.868l1.274 1.274a3.43 3.43 0 01-.141.316zM14.75 8a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM16 5.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5z',
        shredder:
            'M13.25 2.772c-.34-.02-.784-.022-1.472-.022-1.307 0-2.245 0-2.984.056-.73.056-1.204.162-1.59.342a4.25 4.25 0 00-2.056 2.056c-.18.386-.286.86-.342 1.59-.056.739-.056 1.677-.056 2.984v1.472h14.5v-.936c0-.726-.002-1.201-.024-1.564H17.17c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27A2.75 2.75 0 0113.55 7.25c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345V2.772zm5.59 4.478a4.263 4.263 0 00-.216-.4c-.252-.41-.607-.773-1.497-1.663l-.38-.378c-.823-.824-1.158-1.154-1.535-1.393a4.246 4.246 0 00-.462-.256V4.8c0 .572 0 .957.025 1.253.023.287.065.424.111.515.12.235.311.426.546.546.091.046.228.088.515.111.296.024.68.025 1.253.025h1.64zm1.91 4v-1.036c0-1.128 0-1.823-.159-2.485a5.75 5.75 0 00-.688-1.662c-.356-.581-.848-1.073-1.646-1.87l-.07-.07-.379-.38-.064-.064c-.74-.739-1.194-1.194-1.726-1.533a5.75 5.75 0 00-1.844-.764c-.616-.136-1.26-.136-2.304-.136h-.122c-1.27 0-2.265 0-3.067.06-.816.063-1.493.19-2.111.479a5.75 5.75 0 00-2.781 2.78c-.289.62-.416 1.296-.478 2.112-.061.802-.061 1.797-.061 3.066v1.503H2a.75.75 0 000 1.5h20a.75.75 0 000-1.5h-1.25zM6.75 16a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zm3.25-.75a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6a.75.75 0 01.75-.75zm4.75.75a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm3.25-.75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z',
        download:
            'M12.75 3a.75.75 0 00-1.5 0v10.19l-2.72-2.72a.75.75 0 00-1.06 1.06l4 4a.75.75 0 001.06 0l4-4a.75.75 0 10-1.06-1.06l-2.72 2.72V3zM2 19.25a.75.75 0 000 1.5h20a.75.75 0 000-1.5H2z',
    },
};

export default icons;
