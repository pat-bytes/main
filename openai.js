$(document).ready(function () {
    const apiKey = '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';

    function generateAnswer() {
        const query = $("#query").val();

        $.ajax({
            url: "https://api.openai.com/v1/engines/davinci-codex/completions",
            type: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            data: JSON.stringify({
                prompt: `Your AI Search Engine, answer the following query with a witty answer and include validated facts only. ${query}`,
                max_tokens: 150
            }),
            success: function (response) {
                displayAnswer(response.choices[0].text);
            },
            error: function (error) {
                console.error("Erreur OpenAI:", error);
            }
        });
    }

    function displayAnswer(answer) {
        $("#response").text(answer);
    }
});
