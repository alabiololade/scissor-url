
export default function Trim() {
    return  <div id="trim">

    <form action="/action_page.php" className="paste">
        <label htmlFor="fname"></label>
        <input type="text" id="fname" name="firstname" placeholder="Paste URL here..." /><br />

        <label htmlFor="lname"></label>
        <input type="text" id="lname" name="lastname" placeholder="Choose domain" /><br />

        <label htmlFor="lname"></label>
        <input type="text" id="lname" name="lname" placeholder="Type Alias here" /><br />

        <input type="submit" value="Trim URL" />
        <h5 style={{ color: 'blue' }}>By clicking TrimURL, I agree to the <b>Terms of Service, <br />Privacy policy </b>and use of cookies</h5>
    </form>

</div>
}