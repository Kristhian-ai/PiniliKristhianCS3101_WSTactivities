document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCountElement = document.getElementById('wordCount');
    const sentenceCountElement = document.getElementById('sentenceCount');

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        
        // Count words
        const words = text.split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        wordCountElement.textContent = `Words: ${wordCount}`;

        // Count sentences
        const sentences = text.split(/[.!?]+\s*/).filter(sentence => sentence.length > 0);
        const sentenceCount = sentences.length;
        sentenceCountElement.textContent = `Sentences: ${sentenceCount}`;
    });
});