<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use App\Http\Resources\PeopleCollection;
use App\Http\Resources\PersonResource;
use App\Models\Person;

class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PeopleCollection(Person::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'people.*.first_name'    => 'required|max:255',
            'people.*.last_name'     => 'required|max:255',
            'people.*.email_address' => 'required|email',
            'people.*.group_id'      => 'integer',
            'people.*.status'        => Rule::in(['active', 'archived'])
        ]); 
        $people = $request->json()->all();
        foreach ($people as $person) {
            Person::firstOrCreate(["first_name"=>$person['first_name'], "last_name"=>$person['last_name'], "email_address"=>$person['email_address'], "status"=>$person['status'], "group_id"=>$person['group_id']]);
        }

        return response()->json(["Success" => "People were added."], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new PersonResource(Person::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'people.*.first_name'    => 'required|max:255',
            'people.*.last_name'     => 'required|max:255',
            'people.*.email_address' => 'required|email',
            'people.*.group_id'      => 'integer',
            'people.*.status'        => Rule::in(['active', 'archived'])
        ]); 
        $person = Person::findOrFail($id);
        $person->update($request->all());

        return response()->json(null, 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $person = Person::findOrFail($id);
        $person->delete();

        return response()->json(null, 204);
    }
}
