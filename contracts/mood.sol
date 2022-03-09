// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

/// @title A contract for telling blockchain how you feel today
/// @author Anto "Opixelum" Benedetti
/// @notice Read and write user mood on the blockchain
contract MoodDiary {

    string mood;

    /// @notice Stores entered mood into blockchain
    /// @param _mood String entered by the user
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    /// @notice Reads user mood on the blockchain
    /// @return mood Stored mood on the blockchain
    function getMood() public view returns (string memory) {
        return mood;
    }

}
