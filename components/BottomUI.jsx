import { INGREDIENTS, useSandwich } from "@/hooks/useSandwich"
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native"
import { ButtonNew } from "./ButtonNew";

function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BottomUI = () => {
    const addIngredient = useSandwich((state) => state.addIngredient);
    const [addedToCart, setAddedToCart] = useSandwich((state) => [
        state.addedToCart,
        state.setAddedToCart,
    ]);
    const total = useSandwich((state) => state.total);
    return(
        <SafeAreaView edges={["bottom"]}>
        <View style={{
            padding:20,
        }}>

{addedToCart ? (
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "900",
              }}
            >
              Total - ${total.toFixed(2)}
            </Text>
            <Text
              style={{
                color: "#666",
                marginTop: 4,
                marginBottom: 16,
              }}
            >
              Order sent successfully, it will be ready in a few minutes!
              Sit back and relax😎
            </Text>
            <ButtonNew
              title={`Cancel order`}
              color="#fff"
              backgroundColor="#7C4DFF"
              bold
              onPress={() => setAddedToCart(false)}
            />
          </View>
        ) : (
            
            <>
           <View 
           style = {{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
           }}>
            <Text
            style = {{
                flexShrink: 1,
                fontSize: 22,
                fontWeight: "900",
            }}>
                The Sandwich Shop 
            </Text>
            <Text>🥪</Text>
           </View>
        
        <Text
        style = {{
            color: "#666"
        }}>
          Fresh and delicious sandwiches made with love
        </Text>
        <View
        style = {{
            padding: 20,
        }}>
            <Text
            style = {{
                fontSize: 16,
                fontWeight: "900",
                textAlign: "center",
            }}>
                Your creation (₹5.00)
            </Text>
            <Text
            style = {{
                textAlign: "center",
                color: "#666"
            }}>
                Make your sandwich by adding ingredients
            </Text>
            <ScrollView
            horizontal ={true}
            showsHorizontalScrollIndicator = {false}
            style = {{
                padding: 10,
                marginTop: 8,
                marginBottom: 8,
                marginLeft: -40,
                marginRight: -40,
            }}>
                {Object.keys(INGREDIENTS).map((ingredient) =>(
                    <View
                    key={ingredient}
                    style = {{
                        padding: 10,
                    }}
                    >
                        <ButtonNew 
                         title={
                            INGREDIENTS[ingredient].icon +
                            ` ${capitalizeFirstLetter(ingredient)} (+₹${INGREDIENTS[
                              ingredient
                            ].price.toFixed(2)})`
                          }
                          onPress={() => addIngredient(ingredient)}
                        />
                    </View>
                ))}
            </ScrollView>
            <ButtonNew
                title = {`Add to cart (₹${total.toFixed(2)})`}
                color = "#fff"
                backgroundColor = "#7C4DFF"
                bold
                onPress={() => setAddedToCart(true)}
                />
        </View>
        </>
        )
    }
        </View>
        </SafeAreaView>
    )
}