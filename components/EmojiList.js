import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
        'https://w7.pngwing.com/pngs/407/764/png-transparent-yellow-smiley-emoji-emoji-computer-icons-emoticon-sunglasses-emoji-smiley-sticker-glasses.png',
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={
                Platform.OS === 'web' ? true : false
            }
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
                console.log(item);
                return (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}
                    >
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
