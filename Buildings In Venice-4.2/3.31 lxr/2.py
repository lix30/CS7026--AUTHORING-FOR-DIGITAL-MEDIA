from gtts import gTTS

# 语音讲解内容
text = """
Welcome to Ca’ d’Oro, Venice’s Golden Gothic Gem.

If you could travel back in time to the early 15th century, you would find Ca’ d’Oro gleaming in gold along the Grand Canal.

Built between 1421 and 1437 by Marino Contarini, a wealthy Venetian noble, this palace was a true statement of opulence and artistic excellence. Its name, "House of Gold", comes from the gold leaf that once shimmered across much of its façade.

Designed in the elegant Venetian Gothic style, Ca’ d’Oro was intended to reflect the immense success of Venetian trade and the sophisticated taste of the Contarini family.

But this beautiful palace also carries whispers of legend. Locals speak of a curse—a noblewoman betrayed, who vowed that anyone who altered the palace would suffer misfortune. Over the centuries, several mysterious accidents during restoration projects have fueled this myth. Perhaps most famously, Baron Giorgio Franchetti, who painstakingly restored the palace, died suddenly after completing his work.

Who lived here? First, Marino Contarini, who dreamed of building the most magnificent residence in Venice. Then came the Vendramin family, wealthy from trade and banking, who called the palace home for centuries. And finally, Baron Giorgio Franchetti, who purchased Ca’ d’Oro in 1894, restored its grandeur, and generously donated it to the Italian state in 1922.

Now, let’s take a look inside.

On the ground floor, you’ll find a charming open-air courtyard with Venetian well-heads and the loggia that once opened directly onto the Grand Canal.  
On the first floor, explore the permanent museum collection—an impressive array of Renaissance and Gothic art.  
The second floor offers temporary exhibitions and stunning panoramic views of the canal.

Please note: due to the building’s historic architecture, only the ground floor is wheelchair accessible. The upper floors require climbing steep stone staircases.
"""

# 使用 gTTS 生成语音
tts = gTTS(text, lang='en')

# 保存为 MP3 文件
tts.save("ca_doro_guide.mp3")
print("✅ MP3 file saved as ca_doro_guide.mp3")
