/**
 * Overview: A class that allows users to post a new item for sale.
 *           The CreateItemInput screen is activated when users click 'Post New Item' 
 *           from the Create Item screen.
 * 
 * Description: Once the user clicks 'Post New Item' they can then input the new details via this modal screen. 
 *              The main parts of the screen are as follows: 
 * 
 *  - A state variable and text input handlers -> These are behind the scenes and not visible to the user. 
 *                                                They power the functionality of the page. 
 *  - Modal Window-> The screen is made visible to the user via the modal container that wraps it.
 *  - ScrollView-> On this page, the scrollView acts as the main scrollable container for the page. *  
 *  - Text input fields -> The user can enter the details of the new item into the text input fields.
 *  - Buttons -> The user can either choose to add the item, or cancel the item via the buttons.
 *  - Page stylings -> Much of the app's stylings are included on each respective page.
 *                     Occasionally, however, external consts, fonts, and colours have been utilised.
 * 
 * @link   ./src/components/CreateItemInput.js
 * @file   This files defines the CreateItemInput.js class.
 * @author Ashley Davis.
 * @since  02.10.2021
 */

/* AD - Standard imports from both React and React-Native */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, findNodeHandle, Text, Alert, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

/* AD - imports for the logos and items*/
import CreateItemInputLogo from "./CreateItemInputLogo";
import Icon1 from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/MaterialIcons";

/* AD - Constants (such as for custom colours and margins etc) */
import TextStyling from '../constants/fontstyling';
import { Margins, Paddings } from "../constants/constvalues";
import colors from "../constants/colors";
import { isEmpty } from 'lodash';
import ScrollDownList from './ScrollDownList';
import ListItemToSelect from './list/ListItemToSelect';


/* AD - The main function of the component */
const CreateItemInput=(props)=>{
  /************* AD - State Variables *************/

    // AD - State variable (defines the item object)
    // const [isLoading, setLoading] = useState(false);
    const [colorValidator, setColorValidator] = useState(true);
    const [inputValidator, setInputValidator] = useState({
      title: false,
      price: false,
      description: false,
      // image: false,
      category: false,
      condition: false,
      location: false,
    });

    const [item, setItem] = useState({
        categoryId: 1,
        customerId: 1, //TODO
        title: 'some name',
        price: 0,
        description: 'some description',
        image: 'https://www.giantbomb.com/a/uploads/scale_small/46/462814/3221502-8667199912-d2d02.jpg',
        condition: 'used',
        location: 'Hämeenlinna',
    });

    // Handle Condition Data
    const [conditionList, addConditionToList] = useState(["very new", "new", "used", "old"]);
    const [selectedCondition, setSelectedCondition] = useState("Please select...");

    // Handle Category Data
    const [categoryList, addCategoryToList] = useState([null]); // Will store available categories from DB (JAVA)
    const [selectedCategory, setCategory] = useState({
      title: "Please select..." // category title
    }); // Will be used to select a category

    // Handle Region Data
    const [regionList, addRegionToList] = useState([null]); // Will store available regions from DB (JAVA)
    const [selectedRegionId, setRegionId] = useState(); // Will be used to fetch available cities in region (JAVA)

    // Handle City Data
    const [cityList, addCityToList] = useState([]); // Will store available cities per region
    const [selectedCity, setSelectedCity] = useState({
      cityId: null,
      cityName: "Please select..."
    }); // JSON taken from DB (JAVA)
    const [isCityListReady, setCityListReadiness] = useState(false);

    // Handle Modals => Will show/hide selection modals
    const [isCategoryModalVisible, setCategoryModalVisibility] = useState(false);
    const [isConditionModalVisible, setConditionModalVisibility] = useState(false);
    const [isRegionModalVisible, setRegionModalVisibility] = useState(false);
    const [isCityModalVisible, setCityModalVisibility] = useState(false);

    // Handle Loading => Will trigger Data transfer
    const [isLoadingCategories, setLoadingCategories] = useState(true);
    const [isLoadingRegions, setLoadingRegions] = useState(true);
    const [isLoadingCities, setLoadingCities] = useState(false);

    /* const [formChecker, setFormChecker] = useState({
        categoryinput: 'false',
    }) */

    /************* AD - Custom Functions *************/
    //PROMPT messages:
    const openCategoryModal = () => {
      setCategoryModalVisibility(true);
    }
    const openConditionModal = () => {
      setConditionModalVisibility(true);
    }
    const openRegionModal = () => {
      setLoadingRegions(true);
      setRegionModalVisibility(true);
    }
    const openCityModal=()=>{
    setCityModalVisibility(true);
    }
    
    const onCancel=()=>{
      setCategoryModalVisibility(false);
      setConditionModalVisibility(false);
    }
    

    //HANDLER Functions:
    const handleCategorySelection=(selectedItem)=>{
      setCategoryModalVisibility(false);
      setCategory(selectedItem);
      inputValidator.category=true;
      // ToConsole
      console.log("selected item: " +  JSON.stringify(selectedItem));
    }
    const handleConditionSelection=(selectedItem)=>{
    setSelectedCondition(selectedItem);
    setConditionModalVisibility(false);
    inputValidator.condition=true;
    // ToConsole
    //console.log("selected item: " +  JSON.stringify(selectedItem));
    }
    const handleRegionSelection=(selectedItem)=>{
      setRegionModalVisibility(false);
      setRegionId(selectedItem.regionId);
      //changeCitySwipeAccessibility();
      setLoadingCities(true);
      //setCityModalVisibility(true);
      // ToConsole
      console.log("selected item: " +  JSON.stringify(selectedItem));
      console.log("setRegion to " +selectedItem.regionId);
    }
    const handleCitySelection=(selectedItem)=>{
    setSelectedCity(selectedItem);
    setRegionModalVisibility(false);
    setCityModalVisibility(false);
    inputValidator.location=true;
    // ToConsole
    console.log("selected item: " +  JSON.stringify(selectedItem));
    }

    //ALERT messages:
    function handleWrongPriceFormat(){
      Alert.alert(
        "Wrong Format!",
        "You must enter a number: '99.99' or '99'",
        [ 
            { 
            text: "OK",
            onPress: () => console.log("OK Pressed"), 
            }, ], { cancelable: false } );        
    }

    function checkAllFields() {
      for (const item of Object.entries(inputValidator)) {
        console.log(item[0] + " -> " + item[1])
      }
    }

    /* AD - input handlers, to take input from the text input fields */
    /**
     * 
     * @param {*} enteredText 
     */
    const titleInputHandler=(enteredText)=>{
      item.title = enteredText; 
      console.log('entered text/title: ' + enteredText);
      if(isEmpty(enteredText)){
        inputValidator.title = false;
        console.log("No text was entered!");
      }
      else{        
        inputValidator.title = true;
        console.log('entered text/description: ' + enteredText);
      }
      checkAllFields(); 
    }

    /**
     * 
     * @param {*} enteredText 
     */
    const priceInputHandler=(enteredText)=>{
      console.log('entered text/price: ' + enteredText);
      if(isNaN(enteredText)){
        setColorValidator(false);
        inputValidator.price = false;
        handleWrongPriceFormat();
        // ToConsol:
        console.log('Not a number');
        console.log("colorValidator is: " + colorValidator);
      }
      else{
        setColorValidator(true);
        inputValidator.price = true;
        item.price = enteredText;
        // ToConsol:
        console.log('This is a number');
      }
      if(isEmpty(enteredText)) {
        inputValidator.price = false;
        // ToConsol:
        console.log("No text was entered!");
      } 
      checkAllFields();  
    }

    /**
     * 
     * @param {*} enteredText 
     */
    const descriptionInputHandler=(enteredText)=>{
      item.description = enteredText;
      if(isEmpty(enteredText)){
        inputValidator.description = false;
        // ToConsol:
        console.log("No text was entered!");
      }
      else{        
        inputValidator.description = true;
        // ToConsol:
        console.log('entered text/description: ' + enteredText);
      }
      checkAllFields(); 
    }

    /**
     * 
     * @param {*} enteredText 
     */
    const imageInputHandler=(enteredText)=>{
        //item.image = enteredText;
        item.image = "https://thumbs.dreamstime.com/z/sale-real-estate-sign-17187578.jpg"; //TODO: image upload
        // ToConsol:
        console.log('entered text/image: ' + enteredText);
    }

    /**
     * 
     * @param {*} enteredText 
     */
    const categoryInputHandler=(enteredText)=>{
      item.categoryId = enteredText;
      // ToConsol:
      console.log('entered text/categoryId: ' + enteredText);
    }
    
    /**
     * 
     * @param {*} enteredText 
     */
    const conditionInputHandler=(enteredText)=>{
        item.condition = enteredText;
        // ToConsol:
        console.log('entered text/condition: ' + enteredText);
    }

    /**
     * 
     * @param {*} enteredText 
     */
    const locationInputHandler=(enteredText)=>{
        item.location = enteredText;
        // ToConsol:
        console.log('entered text/location: ' + enteredText);
    }
    
    /* AD - custom functions to control the modal 
    (other functions are called via props, and the item object can be added) */
    /**
     * 
     */
    const addItem=()=>{
        props.onAddItem(item);
    }
    /**
     * 
     */
    const cancelItem=()=>{
        props.onCancelItem();
    }

  // SERVICE FUNCTIONS ======================================================================================================
  // *** GET ***
  async function getAllCategory() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/categoryservice/getall");
    }
    catch(error){
      alert("Error in Service Method: " + error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      addCategoryToList(responseData);
      // To console
      // console.log(responseData);
      console.log('categoryList: ' + categoryList)
    }
    catch(error){
      alert("Error in Response Data: " + error);
    }
  }

  // *** GET ***
  async function getAllRegion() {
    //Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      //This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch("http://10.0.2.2:8080/rest/regionservice/getallregion");
    }
    catch(error){
      alert("Error in service method: " + error);
    }
    try{
      //Getting json from the response
      let responseData = await response.json();
      addRegionToList(responseData);
      // Toonsole
      console.log('regionList: ' + regionList)
    }
    catch(error){
      alert("Error in Response Data: " + error);
    }
  }

  // *** GET ***
  async function getAllCityInRegion(regionId) {
    console.log("async function getAllCityInRegion(regionId) {");
    console.log('regionId = ' + regionId);
    // Variable res is used later, so it must be introduced before try block and so cannot be const.
    let response = null;
    try{
      // This will wait the fetch to be done - it is also timeout which might be a response (server timeouts)
      response = await fetch(`http://10.0.2.2:8080/rest/regionservice/getallcityfromregion/${regionId}`); //Template literal `${}`
      //console.log("Fetching response... => response: " + JSON.stringify(response, null, 4))
    }
    catch(error){
      console.log(error);
      alert("Error in service method: " + error);
    }
    try{
      // Getting json from the response
      let responseData = await response.json();
      addCityToList(responseData.regionCities);
      console.log("cities in region" + JSON.stringify(responseData.regionCities, null, 4));
    }
    catch(error){
      console.log(error);
      alert("Error in Response Data: " + error);
    }
  }


// USE EFFECT FUNCTION ====================================================================================================
  useEffect(() => {
    console.log('useEffect(() => {');
      if (isLoadingCategories==true){
        getAllCategory();
        setLoadingCategories(false);
      } 
      if (isLoadingRegions==true){
        getAllRegion();
        setLoadingRegions(false);
      }
      if(isLoadingCities==true){
        getAllCityInRegion(selectedRegionId);
        setLoadingCities(false);
        setCityListReadiness(true);
      }
      if(isCityListReady==true){
        console.log("if(isCityListReady==true){");
        //console.log("cityList: " + JSON.stringify(cityList));
        setCityModalVisibility(true);
        setCityListReadiness(false);
      }
  });
// ========================================================================================================================

  return (
  /************* AD - The data to be rendered and visible to the user *************/
      <View>
        <Modal visible={props.visibility} animationType="slide">
          <ScrollView style={styles.scrollView}>
            <View style={styles.formStyle}>
              <View style={styles.logoCustom} >
              <CreateItemInputLogo></CreateItemInputLogo>
              </View>

              <Text style={TextStyling.textBlackSmall}>Item Name</Text>
              <View style={styles.itemNameRow}>
              <Icon1 name="tag" style={styles.iconStyling}></Icon1>
              <TextInput placeholder="Item's name" 
                  style={styles.inputStyle}
                  maxLength={5} 
                  onChangeText={titleInputHandler}/>
              </View>

              <Text style={TextStyling.textBlackSmall}>Price</Text>
              <View style={styles.itemNameRow}>
              <Icon2 name="euro-sign" style={styles.iconStyling2}></Icon2>  
              
              <TextInput placeholder="Item's price" 
                  style={[styles.inputStyle, {borderColor: colorValidator ? colors.darkBlueCustom : "red"}]} //backgroundColor: darkMode ? '#282f3b' : '#f5f5f5',
                  maxLength={10} 
                  onChangeText={priceInputHandler}/>                
              </View>

              <Text style={TextStyling.textBlackSmall}>Description</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="edit" style={styles.iconStyling3}></Icon3>    
              <TextInput placeholder="Item's description"                
                  style={styles.inputStyle2}
                  maxLength={255}
                  multiline={true}
                  numberOfLines={8}  
                  onChangeText={descriptionInputHandler}/>               
              </View>
                
              <Text style={TextStyling.textBlackSmall}>Image</Text>
              <View style={styles.itemNameRow}>               
              <Icon3 name="image" style={styles.iconStyling3a}></Icon3>    
              <TextInput placeholder="Default image will be used" //placeholder="Item's image"                
                  style={[styles.inputStyle3, {backgroundColor: "grey"}]}
                  editable={false} 
                  onChangeText={imageInputHandler}/>               
              </View>

              <Text style={TextStyling.textBlackSmall}>Category</Text>
              <View style={styles.itemNameRow}>                
              <Icon4 name="category" style={styles.iconStyling5}></Icon4> 
              <TextInput //placeholder="Item's category" 
                style={styles.inputStyle}
                editable={false}
                value={selectedCategory.title || "select one"}
                //onChangeText={categoryInputHandler}
              />                           
              </View> 
              {/* AD please style it! */}
              <ScrollDownList
                onPress={openCategoryModal}
              />

              <Text style={TextStyling.textBlackSmall}>Condition</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="build-circle" style={styles.iconStyling5}></Icon4> 
              <TextInput //placeholder="Item's condition" 
                style={styles.inputStyle} 
                editable={false}
                value={selectedCondition || "select one"}
                //onChangeText={conditionInputHandler}
              />
              </View>
              <ScrollDownList
                onPress={openConditionModal}
              />

              <Text style={TextStyling.textBlackSmall}>Location</Text>
              <View style={styles.itemNameRow}>
              <Icon4 name="my-location" style={styles.iconStyling5}></Icon4> 
              <TextInput //placeholder="Item's location"
                style={styles.inputStyle}
                editable={false}
                value={selectedCity.cityName || "select one"}
                //onChangeText={locationInputHandler}
              />
              </View>
              <ScrollDownList
                onPress={openRegionModal}
              />

              <View style={styles.buttonView}>
                <View style={styles.button}>
                <Button color='#c83232' title="Cancel" onPress={cancelItem}/>
                </View>
                <View style={styles.button}>
                <Button color='#000080' title="Add" onPress={addItem}/>
                </View>
              </View>          
            </View>
          </ScrollView>
        </Modal>
              
{/* MODALS -------------------------------------------------------------------------------- */}
            <Modal visible={isCategoryModalVisible}>
              <Text style={styles.modalTitle}>Available Categories</Text>
              <FlatList
                keyExtractor={(category) => category.id.toString()} 
                data={categoryList}
                renderItem={categoryData =>
                  <ListItemToSelect 
                    id={categoryData.item.id}
                    name={categoryData.item.title}
                    onPress={() => handleCategorySelection(categoryData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
            <Modal visible={isConditionModalVisible}>
              <Text style={styles.modalTitle}>Select a condition:</Text>
              <FlatList
                keyExtractor={(condition) => condition}
                data={conditionList}
                renderItem={conditionData =>
                  <ListItemToSelect 
                    name={conditionData.item}
                    onPress={() => handleConditionSelection(conditionData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel}/>
            </Modal>
{/*                       *******************                      */}
            <Modal visible={isRegionModalVisible}>
              <Text style={styles.modalTitle}>Available Regions</Text>
              <FlatList
                keyExtractor={(region) => region.regionId.toString()} 
                data={regionList}
                renderItem={regionData =>
                  <ListItemToSelect 
                    id={regionData.item.regionId}
                    name={regionData.item.regionName}
                    onPress={() => handleRegionSelection(regionData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>
{/*                       *******************                      */}
            <Modal visible={isCityModalVisible}>
              <Text style={styles.modalTitle}>Cities in Region</Text>
              <FlatList
                keyExtractor={(city) => city.cityId.toString()}
                data={cityList}
                renderItem={cityData =>
                  <ListItemToSelect 
                    id={cityData.item.cityId}
                    name={cityData.item.cityName}
                    onPress={() => handleCitySelection(cityData.item)}
                  />}
              />
              <Button title='Cancel' onPress={onCancel} />
            </Modal>       
      </View> 
    );
}

/************* AD - Stylings *************/

const styles=StyleSheet.create({
      scrollView: {
        backgroundColor: colors.light4,
      },
    formStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: colors.light4,
        paddingHorizontal: 10,        
      },
      logoCustom: {
        marginTop: Margins.narrow,
      },
      inputStyle: {
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize, 
        height: 40,  
        borderRadius: 5,            
      },
      inputStyle2: {
        borderBottomWidth:1,
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        height: 80,
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize,
        borderRadius: 5,  
      },
      inputStyle3: {
        borderBottomWidth:1, 
        borderColor: colors.darkBlueCustom,
        paddingLeft: Paddings.narrow,
        width:'80%',
        height: 70,
        backgroundColor: 'white',
        color: '#000080',
        marginRight: Margins.midsize,
        borderRadius: 5,  
      },
      itemNameRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
        paddingLeft: 20,
        marginVertical: Margins.midsize,
      },
      button:{
        width:'40%',
      },
      iconStyling: {
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 6,
        color: colors.danger,
      },
      iconStyling2: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: 18.7,
        paddingTop: 6,
      },
      iconStyling3: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 28,
      },
      iconStyling3a: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.midsize,
      },
      iconStyling4: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: Paddings.narrow,
      },
      iconStyling5: {
        color: '#000080',
        fontSize: 30,
        justifyContent:'center',
        alignItems:'center',      
        paddingRight: Paddings.narrow,
        paddingTop: 6,
      },
      modalTitle:{
      textAlign:'center',
      marginBottom: 15,
      padding: 5,
      fontSize: 20,
      fontWeight: "bold",
      color: '#2d3553',
      backgroundColor: colors.light1,
    },
});

export default CreateItemInput;
